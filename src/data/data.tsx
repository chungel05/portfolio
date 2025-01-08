import { JobExperience } from "@/lib/type";

const experiences: JobExperience[] = [
    {
        jobTitle: "Software Engineer",
        company: "Armitage Technologies Ltd.",
        icon: "Armitage",
        timePeriod: "Jun. 2015 - Jun. 2017",
        description: "Developed Scalable Web Solution",
        achievement: [
            "Designed a Rational database schema by using MSSQL and implementing clustered and non-clustered indexes across 50+ tables, improving query performance by 30%",
            "Leveraged capabilities of C# Entity Framework to build RESTful API with scalable and efficient architecture, enhancing compatibility and flexibility for other platforms by 35%",
            "Designed and developed a responsive Frontend Web application by using Angular, written in Typescript, HTML and CSS, reducing UI loading time by 60% compared with traditional webpage",
            "Researched and implemented Lazy loading and Pagination for large volume data, reducing data loading time within 30 seconds",
            "Developed and tested ERP System throughout Agile software development life cycle, reduced time-to-market by 40% and 15% under budget, resulting in 30% increase in customer satisfaction",
            "Tracked and managed user-reported issue tickets in Redmine to implement time distribution measurements and workflow optimizations, improving 40% in team performance and faster issue resolution times",
        ],
    },
    {
        jobTitle: "Software Engineer II",
        company: "Nomura Research Institute",
        icon: "NRI",
        timePeriod: "Aug. 2017 - Mar. 2020",
        description: "Built Robust ERP System for a multinational corporation",
        achievement: [
            "Built internal invoice system by using Next.JS framework with PostgreSQL database, reducing document processing time by 30% compared with traditional desktop application",
            "Established internal communication channels for co-operating and communicating with 20+ world-wide teammates by deploying RocketChat in AWS with MongoDB, increasing 30% team enjoyment",
            "Designed and developed customizations of ERP System through comprehensive Fit-Gap Analysis and aligning system capabilities with business requirements, identifying 100k+ HKD potential cost savings",
            "Managed source code and enabled straight forward preview of changes by utilizing SVN Version control system, reducing 25% in code conflicts and 30% improvement in team collaboration and code quality",
        ],
    },
    {
        jobTitle: "Product Manager",
        company: "Nomura Research Institute",
        icon: "NRI",
        timePeriod: "Apr. 2020 - Feb. 2024",
        description:
            "Defined vision and strategy of ERP products, ensured alignment with business goals",
        achievement: [
            "Managed ERP product backlog and prioritized features based on business value and user needs, resulting in a 50% increase in customer satisfaction scores over 5 years",
            "Developed and maintained comprehensive ERP system roadmap, aligning with company goals and targets, resulting in a 30% more efficient resource allocation and project prioritization",
            "Facilitated Technical Workshop to share experience and knowledge with teammates, improving collaboration and team dynamics by 20%",
        ],
    },
];

export default experiences;
