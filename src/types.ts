export interface Svg {
    width?: number;
    height?: number;
    setColor?: boolean;
}

export interface Store {
    navMenu: {
        open: boolean;
        setOpen: () => void;
    };
    contactForm: {
        name: string;
        email: string;
        message: string;
        sending: boolean;
        update: (field: string, value: string) => void;
        send: () => void;
    };
}

export interface ProjectType {
    id: number;
    title: string;
    image: string;
    githubLink: string;
    websiteLink: string;
}

export interface SkillType {
    name: string;
    proficiency: number;
}

export interface Copy {
    phone: boolean;
    email: boolean;
}
