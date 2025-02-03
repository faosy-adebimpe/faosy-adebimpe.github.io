import { ProjectType } from '../../types';
import ArrowUpRightFromSquareIcon from '../icons/ArrowUpRightFromSquareIcon';
import SquareGitHubIcon from '../icons/SquareGitHubIcon';

const Project: React.FC<ProjectType> = ({
    title,
    image,
    githubLink,
    websiteLink,
}) => {
    return (
        <div className='project gsap-project transition-all duration-200 hover:scale-110 bg-(--primary-color)/10 rounded-md p-2 opacity-70 hover:opacity-100'>
            <div className='project-image'>
                <div className='w-[173px] h-[159px] bg-(--black-2) sm:w-[230px] sm:h-[200px] md:w-[233px] md:h-[214px] rounded-md overflow-hidden'>
                    <img
                        className='w-full h-full object-cover object-center'
                        src={image}
                        alt={title + 'image'}
                    />
                </div>
            </div>
            <div className='project-footer w-full h-[31px] flex justify-between items-center'>
                <p className='project-title text-[10px] sm:text-[12px] text-(--gray-1) md:text-[14px]'>
                    {title}
                </p>
                <div className='project-icons flex gap-[7.3px] items-center'>
                    <a
                        href={githubLink}
                        target='_blank'
                        className='project-icon'
                    >
                        <SquareGitHubIcon />
                    </a>
                    <a
                        href={websiteLink}
                        target='_blank'
                        className='project-icon'
                    >
                        <ArrowUpRightFromSquareIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
