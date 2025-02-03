import { useStore } from '../../store';
import LoadIcon from '../icons/LoadIcon';

const Form: React.FC = () => {
    const { name, email, message, sending, update, send } = useStore(
        (store) => store.contactForm
    );

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = event.target;
        update(name, value);
    };
    return (
        <form
            className='contact w-[302px] flex gap-[25px] flex-col sm:w-[358px] sm:-w[358px] md:-w[324px]'
            id='contact'
            onSubmit={(event) => event.preventDefault()}
        >
            <div className='form-input'>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
                <label htmlFor='name'>Name</label>
            </div>
            <div className='form-input'>
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor='name'>Email</label>
            </div>
            <div className='form-input'>
                {/* <input type='text' /> */}
                <textarea
                    rows={5}
                    className='resize-none'
                    name='message'
                    value={message}
                    onChange={handleChange}
                ></textarea>
                <label htmlFor='name'>Message</label>
            </div>
            <div className='center-center'>
                <button
                    className='w-[145px] h-[37px] bg-(--brand-color) text-[12px] text-(--secondary-color) rounded-[5px] cursor-pointer hover-effect sm:w-[174px] sm:h-[42px] flex justify-center items-center gap-3'
                    onClick={send}
                >
                    <span className=''>{sending ? 'Sending...' : 'Send'}</span>
                    {sending && (
                        <span
                            className={
                                'flex justify-center items-center text-[1.3em] ' +
                                (sending ? 'animate-spin' : '')
                            }
                        >
                            <LoadIcon setColor />
                        </span>
                    )}
                </button>
            </div>
        </form>
    );
};

export default Form;
