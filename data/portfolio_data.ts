import portfolio_img_1 from "~/assets/images/projects/work1.jpg";
import portfolio_img_2 from "~/assets/images/projects/work2.jpg";
import portfolio_img_3 from "~/assets/images/projects/work3.jpg";
import portfolio_img_4 from "~/assets/images/projects/work4.jpg";
import portfolio_img_5 from "~/assets/images/projects/work5.jpg";

interface PortfolioItem {
    id: number;
    col: string;
    image: any;
    title: string;
    category: string;
    client: string;
    year: string;
    problem: string;
    solution: string;
    techUsed: string[];
    liveLink: string;
    sourceLink?: string;
    caseStudyLink?: string;
}

const portfolio_data: PortfolioItem[] = [
    {
        id: 1,
        col: "6",
        image: portfolio_img_1,
        title: "Techspace.no",
        category: "Visual Identity & Branding",
        client: "Techspace Norway",
        year: "2025",
        problem: "The client needed a minimalist yet high-impact visual identity to stand out in the competitive Scandinavian tech market.",
        solution: "Designed a clean, Nordic-inspired branding ecosystem and a high-performance web presence that emphasizes trust and innovation.",
        techUsed: ["Figma", "WordPress", "Adobe Illustrator"],
        liveLink: "https://techspace.no",
        caseStudyLink: "#"
    },
    {
        id: 2,
        col: "6",
        image: portfolio_img_2,
        title: "Squarestech.no",
        category: "Web Design & Dev",
        client: "SquaresTech",
        year: "2024",
        problem: "SquaresTech lacked a centralized platform to showcase their multidisciplinary services and automate lead generation.",
        solution: "Built a custom WordPress site with Elementor and integrated GoHighLevel workflows for seamless client onboarding.",
        techUsed: ["WordPress", "Elementor", "GoHighLevel"],
        liveLink: "https://squarestech.no",
        sourceLink: "https://github.com/ahmedmirza112345"
    },
    {
        id: 3,
        col: "4",
        image: portfolio_img_3,
        title: "Wenet.ca",
        category: "Marketing Strategy",
        client: "Wenet Canada",
        year: "2024",
        problem: "A Canadian ISP required a localized marketing strategy to increase their market share in specific regions.",
        solution: "Implemented a data-driven marketing campaign focusing on social proof and targeted Meta Ads.",
        techUsed: ["Meta Ads", "Google Analytics", "Marketing Strategy"],
        liveLink: "https://wenet.ca",
        caseStudyLink: "#"
    },
    {
        id: 4,
        col: "4",
        image: portfolio_img_4,
        title: "Petrisia Store",
        category: "Logo & Social Media",
        client: "Petrisia",
        year: "2023",
        problem: "An e-commerce startup needed a brand identity that felt premium and approachable for a global audience.",
        solution: "Developed a comprehensive brand guide, including logo, typography, and social media templates.",
        techUsed: ["Adobe Photoshop", "Illustrator", "Social Media Design"],
        liveLink: "#",
        caseStudyLink: "#"
    },
    {
        id: 5,
        col: "4",
        image: portfolio_img_5,
        title: "Squares.no",
        category: "Digital Product UI",
        client: "Squares Norway",
        year: "2023",
        problem: "The existing UI was cluttered and failed to convert high-intent visitors into leads.",
        solution: "Redesigned the entire user journey with a focus on conversion rate optimization (CRO) and accessibility.",
        techUsed: ["Figma", "UI/UX Design", "Prototyping"],
        liveLink: "https://squares.no",
        caseStudyLink: "#"
    },
];

export default portfolio_data;