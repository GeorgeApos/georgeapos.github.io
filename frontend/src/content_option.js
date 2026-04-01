const logotext = "GEOAPOS";
const meta = {
    title: "George David Apostolidis",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "George David Apostolidis",
    animated: {
        first: "Software Engineer",
        second: "Research Associate",
        third: "Bioinformatician (to be)",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: "https://media.licdn.com/dms/image/v2/D4D03AQEsBkIlrEQYBQ/profile-displayphoto-scale_200_200/B4DZehvoIVH4Ac-/0/1750765306941?e=2147483647&v=beta&t=R-Eb1mYXPOmSlXLInLa_jXG0JQH6eNC6RCEKJYfmqYo",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a software engineer with a strong foundation in full-stack development and a growing focus on computational biology and bioinformatics. My background combines experience in building scalable applications with research on software quality and security in open-source systems. I am currently pursuing an MSc in Bioinformatics at Wageningen University, where I aim to bridge software engineering and systems biology. I am particularly interested in data-driven modeling, gene expression analysis, and developing tools that translate complex biological data into meaningful insights.",
};

const worktimeline = [
    {
        jobtitle: "Research Associate | Software Engineer",
        where: "University of Macedonia",
        date: "Jan 2025 – Jul 2025",
    },
    {
        jobtitle: "Research Associate (Software Security)",
        where: "CERTH – Centre for Research & Technology Hellas",
        date: "Nov 2023 – Jun 2025",
    },
    {
        jobtitle: "Junior Software Developer (Internship)",
        where: "Rational Data",
        date: "Mar 2023 – May 2023",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "Java", value: 80 },
    { name: "JavaScript / TypeScript", value: 85 },
    { name: "FastAPI", value: 85 },
    { name: "Spring Boot", value: 80 },
    { name: "React / React Native", value: 75 },
    { name: "Machine Learning & Data Analysis", value: 80 },
    { name: "Bioinformatics (RNA-seq, DE analysis)", value: 75 },
    { name: "Docker & Linux", value: 80 },
    { name: "Databases (MongoDB, PostgreSQL, MySQL)", value: 70 },
];

const education = [
    {
        title: "MSc Bioinformatics and Systems Biology - Wageningen University & Research (In Progress)",
        where: "Wageningen University & Research",
        date: "Sep 2025 – Sep 2027",
        description: "Focus on computational biology, systems modeling, and data-driven analysis of biological systems.",
    },
    {
        title: "MSc Applied Informatics (Software Development & Cloud) - University of Macedonia",
        where: "University of Macedonia",
        date: "2023 – 2025",
        description: "Specialized in backend systems, cloud applications, and software engineering principles.",
    },
    {
        title: "BSc Applied Informatics (Information Systems) - University of Macedonia",
        where: "University of Macedonia",
        date: "2019 – 2023",
        description: "Strong foundation in software development, databases, and system design.",
    },
    {
        title: "BSc Economics (Incomplete) - University of Macedonia",
        where: "University of Macedonia",
        date: "2017 – 2019",
        description: "Started in economics before transitioning to informatics, shaping a strong analytical mindset.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "george.apostolidis@wur.nl",
    YOUR_FONE: "+31 6 34438252",
    description: "Open to opportunities in software engineering, computational biology, and research collaborations. Feel free to reach out to discuss ideas or potential projects.",

    YOUR_SERVICE_ID: process.env.REACT_APP_EMAIL_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
};

const socialprofils = {
    github: "https://github.com/GeorgeApos",
    linkedin: "https://www.linkedin.com/in/geoapos/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    education,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};