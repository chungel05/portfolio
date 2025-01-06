import NRIComponent from "@/components/svg/NRI";
import Armitage from "@/components/svg/Armitage";
import { JobExperience } from "@/lib/type";

const experiences: JobExperience[] = [
    {
        jobTitle: "Software Engineer",
        company: "Armitage Technologies Ltd.",
        icon: <Armitage />,
        timePeriod: "Jun. 2015 - Jun. 2017",
        description: "Developed Scalable Web Solution",
        achievement: [
            "Designed Rational database schema by using MSSQL, improving data management/indexing by 30%",
            "Developed RESTful API to replace original API using with C# Entity framework, increasing its compatibility and flexibility by 50% for other platforms",
            "Designed and developed Frontend Web application by using Angular, written in Typescript, HTML and CSS, providing responsive and fast load UI experience by 60% than traditional webpage",
            "Researched technical solution for improving system performance, i.e. using Lazy loading/Pagination to reduce data loading time within 30 seconds",
            "Developed and tested system throughout Agile software development life cycle",
            "Tracked and manage issues tickets raised by user in Redmine, improving team performance over 40% by measuring the time distribution",
        ],
    },
    {
        jobTitle: "Software Engineer II",
        company: "Nomura Research Institute",
        icon: <NRIComponent />,
        timePeriod: "Aug. 2017 - Mar. 2020",
        description: "Built Robust ERP System for a multinational corporation",
        achievement: [
            "Built Internal Invoice System by using Next.JS with PostgreSQL, reducing document processing time by 30%",
            "Established RocketChat communication channels in AWS and MongoDB to co-operate and communicate with over 20 world-wide teammates, leading to 30% increase in team enjoyment",
            "Developed and maintained customizations of ERP System throughout the Fit-Gap Analysis, identifying potential cost savings by 100k Hong Kong dollars",
            "Utilized Version control system: SVN to manage source code, providing straight forward review of changes",
            "Provided first tier technical and business support to customer and recorded issues in Redmine aiming for effective collaboration, increasing productivity to 35%",
        ],
    },
    {
        jobTitle: "Product Manager",
        company: "Nomura Research Institute",
        icon: <NRIComponent />,
        timePeriod: "Apr. 2020 - Feb. 2024",
        description:
            "Defined vision and strategy of ERP products, ensured alignment with business goals",
        achievement: [
            "Managed ERP product backlog and prioritized features based on business value and user needs, resulting in a 50% increase in customer satisfaction scores over 5 years",
            "Developed and maintained ERP system roadmap, aligning with company goals and target",
            "Facilitated Workshop to share experience and knowledge with teammates in Company global meeting, improving collaboration and team dynamics by 20%",
            "Proposed Agile development life cycle principle for system functional customization, resulting in 30 days faster delivery",
            "Facilitated user training for existing clients, leading to a 30% of workflow improvement",
        ],
    },
];

export default experiences;
