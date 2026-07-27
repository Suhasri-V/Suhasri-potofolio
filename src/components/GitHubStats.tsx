import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface GitHubData {
  public_repos: number;
  login: string;
  avatar_url?: string;
  html_url?: string;
}

export default function GitHubStats() {
  const { data: portfolioData } = usePortfolio();
  const username = portfolioData.personalInfo.githubUsername || 'suhasri-v';

  const [data, setData] = useState<GitHubData | null>(null);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        setLoading(true);
        const userRes = await fetch(`https://api.github.com/users/${username}`).catch(() => null);
        
        if (userRes && userRes.ok) {
          const userData = await userRes.json();
          if (isMounted && userData && userData.login) {
            setData(userData);

            const reposRes = await fetch(`https://api.github.com/users/${username}/repos`).catch(() => null);
            if (reposRes && reposRes.ok) {
              const reposData = await reposRes.json();
              const langCount: Record<string, number> = {};
              if (Array.isArray(reposData)) {
                reposData.forEach((repo: { language?: string }) => {
                  if (repo.language) {
                    langCount[repo.language] = (langCount[repo.language] || 0) + 1;
                  }
                });
              }
              setLanguages(langCount);
            }
          }
        } else {
          // Default fallback data if user not found or API rate limited
          if (isMounted) {
            setData({
              login: username,
              public_repos: 4,
              html_url: `https://github.com/${username}`
            });
            setLanguages({
              'Java': 2,
              'Python': 2,
              'C': 1
            });
          }
        }
      } catch {
        // Fallback gracefully without logging error to console
        if (isMounted) {
          setData({
            login: username,
            public_repos: 4,
            html_url: `https://github.com/${username}`
          });
          setLanguages({
            'Java': 2,
            'Python': 2,
            'C': 1
          });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchData();
    return () => { isMounted = false; };
  }, [username]);

  if (loading) {
    return (
      <div className="max-w-xl mx-auto my-12 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl text-center text-gray-400">
        Loading GitHub stats for {username}...
      </div>
    );
  }

  const profileUrl = data?.html_url || `https://github.com/${username}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto my-12 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl hover:border-blue-500/50 transition-colors"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {data?.avatar_url ? (
            <img src={data.avatar_url} alt={data.login} className="w-16 h-16 rounded-full border-2 border-blue-500/30 object-cover" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center border-2 border-blue-500/30 text-blue-400">
              <Github className="w-8 h-8" />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold text-white">{data?.login || username}</h3>
            <p className="text-gray-400 text-sm">GitHub Developer</p>
          </div>
        </div>
        
        <motion.a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-neutral-900 text-neutral-200 border border-neutral-800 hover:border-blue-500/50 hover:text-white rounded-full text-xs font-semibold transition-colors"
        >
          View Profile
        </motion.a>
      </div>
      
      <div className="text-center mb-8 p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800/80">
        <p className="text-5xl font-bold text-blue-500">{data?.public_repos ?? 4}</p>
        <p className="text-xs text-neutral-400 uppercase tracking-widest mt-2">Projects & Repositories</p>
      </div>

      <div>
        <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">Core Tech & Languages</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(languages).length > 0 ? (
            Object.entries(languages).sort((a,b) => b[1] - a[1]).map(([lang, count]) => (
              <span key={lang} className="px-3 py-1 bg-neutral-900 text-neutral-200 rounded-full text-xs border border-neutral-800">
                {lang} ({count})
              </span>
            ))
          ) : (
            ['Java', 'Python', 'C Programming'].map(lang => (
              <span key={lang} className="px-3 py-1 bg-neutral-900 text-neutral-200 rounded-full text-xs border border-neutral-800">
                {lang}
              </span>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}


