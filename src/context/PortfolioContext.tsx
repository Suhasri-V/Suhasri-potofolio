import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, PersonalInfo, Skill, Project, Experience, Certification, Achievement, LinkedInStats } from '../types';
import { DEFAULT_PORTFOLIO_DATA } from '../lib/constants';

interface PortfolioContextType {
  data: PortfolioData;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  setSkills: (skills: Skill[]) => void;
  addSkill: (skill: Skill) => void;
  removeSkill: (skillName: string) => void;
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (id: number, project: Partial<Project>) => void;
  removeProject: (id: number) => void;
  setExperience: (exp: Experience[]) => void;
  addExperience: (exp: Experience) => void;
  updateExperience: (index: number, exp: Partial<Experience>) => void;
  removeExperience: (index: number) => void;
  setAchievements: (ach: Achievement[]) => void;
  addAchievement: (ach: Achievement) => void;
  removeAchievement: (index: number) => void;
  setBasicCertifications: (certs: Certification[]) => void;
  addBasicCertification: (cert: Certification) => void;
  removeBasicCertification: (index: number) => void;
  setProfessionalCertifications: (certs: Certification[]) => void;
  addProfessionalCertification: (cert: Certification) => void;
  removeProfessionalCertification: (index: number) => void;
  updateLinkedInStats: (stats: Partial<LinkedInStats>) => void;
  resetToDefault: () => void;
  exportJSON: () => void;
  importJSON: (jsonString: string) => boolean;
  isEditModalOpen: boolean;
  setIsEditModalOpen: (open: boolean) => void;
  activeEditTab: string;
  setActiveEditTab: (tab: string) => void;
}

const STORAGE_KEY = 'suhasri_portfolio_data_v6';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_PORTFOLIO_DATA,
          ...parsed,
          personalInfo: { ...DEFAULT_PORTFOLIO_DATA.personalInfo, ...(parsed.personalInfo || {}) },
          linkedinStats: { ...DEFAULT_PORTFOLIO_DATA.linkedinStats, ...(parsed.linkedinStats || {}) },
        };
      }
    } catch (e) {
      console.error('Failed to load portfolio state from localStorage', e);
    }
    return DEFAULT_PORTFOLIO_DATA;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeEditTab, setActiveEditTab] = useState('personal');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save portfolio data to localStorage', e);
    }
  }, [data]);

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const setSkills = (skills: Skill[]) => {
    setData((prev) => ({ ...prev, skills }));
  };

  const addSkill = (skill: Skill) => {
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, { ...skill, id: skill.id || Date.now().toString() }],
    }));
  };

  const removeSkill = (skillName: string) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.name.toLowerCase() !== skillName.toLowerCase()),
    }));
  };

  const setProjects = (projects: Project[]) => {
    setData((prev) => ({ ...prev, projects }));
  };

  const addProject = (project: Project) => {
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: project.id || Date.now() }],
    }));
  };

  const updateProject = (id: number, updated: Partial<Project>) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    }));
  };

  const removeProject = (id: number) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const setExperience = (experience: Experience[]) => {
    setData((prev) => ({ ...prev, experience }));
  };

  const addExperience = (exp: Experience) => {
    setData((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...exp, id: exp.id || Date.now().toString() }],
    }));
  };

  const updateExperience = (index: number, updated: Partial<Experience>) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e, i) => (i === index ? { ...e, ...updated } : e)),
    }));
  };

  const removeExperience = (index: number) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const setAchievements = (achievements: Achievement[]) => {
    setData((prev) => ({ ...prev, achievements }));
  };

  const addAchievement = (ach: Achievement) => {
    setData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, { ...ach, id: ach.id || Date.now().toString() }],
    }));
  };

  const removeAchievement = (index: number) => {
    setData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((_, i) => i !== index),
    }));
  };

  const setBasicCertifications = (basicCertifications: Certification[]) => {
    setData((prev) => ({ ...prev, basicCertifications }));
  };

  const addBasicCertification = (cert: Certification) => {
    setData((prev) => ({
      ...prev,
      basicCertifications: [...prev.basicCertifications, { ...cert, id: cert.id || Date.now().toString() }],
    }));
  };

  const removeBasicCertification = (index: number) => {
    setData((prev) => ({
      ...prev,
      basicCertifications: prev.basicCertifications.filter((_, i) => i !== index),
    }));
  };

  const setProfessionalCertifications = (professionalCertifications: Certification[]) => {
    setData((prev) => ({ ...prev, professionalCertifications }));
  };

  const addProfessionalCertification = (cert: Certification) => {
    setData((prev) => ({
      ...prev,
      professionalCertifications: [...prev.professionalCertifications, { ...cert, id: cert.id || Date.now().toString() }],
    }));
  };

  const removeProfessionalCertification = (index: number) => {
    setData((prev) => ({
      ...prev,
      professionalCertifications: prev.professionalCertifications.filter((_, i) => i !== index),
    }));
  };

  const updateLinkedInStats = (stats: Partial<LinkedInStats>) => {
    setData((prev) => ({
      ...prev,
      linkedinStats: { ...prev.linkedinStats, ...stats },
    }));
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all portfolio details back to default?')) {
      setData(DEFAULT_PORTFOLIO_DATA);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const exportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${data.personalInfo.name.replace(/\s+/g, '_')}_Portfolio_Details.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importJSON = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object') {
        setData({
          ...DEFAULT_PORTFOLIO_DATA,
          ...parsed,
          personalInfo: { ...DEFAULT_PORTFOLIO_DATA.personalInfo, ...(parsed.personalInfo || {}) },
          linkedinStats: { ...DEFAULT_PORTFOLIO_DATA.linkedinStats, ...(parsed.linkedinStats || {}) },
        });
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON imported', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updatePersonalInfo,
        setSkills,
        addSkill,
        removeSkill,
        setProjects,
        addProject,
        updateProject,
        removeProject,
        setExperience,
        addExperience,
        updateExperience,
        removeExperience,
        setAchievements,
        addAchievement,
        removeAchievement,
        setBasicCertifications,
        addBasicCertification,
        removeBasicCertification,
        setProfessionalCertifications,
        addProfessionalCertification,
        removeProfessionalCertification,
        updateLinkedInStats,
        resetToDefault,
        exportJSON,
        importJSON,
        isEditModalOpen,
        setIsEditModalOpen,
        activeEditTab,
        setActiveEditTab,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
