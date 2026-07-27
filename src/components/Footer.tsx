import SocialLinks from './SocialLinks';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { data } = usePortfolio();

  return (
    <footer className="py-10 text-center border-t border-white/10">
      <p className="text-gray-500 mb-4">© {new Date().getFullYear()} {data.personalInfo.name}. All rights reserved.</p>
      <SocialLinks className="text-blue-400 hover:text-blue-300" />
    </footer>
  );
}

