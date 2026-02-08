import InputComponent from './InputComponent'
import clsx from 'clsx';
import PrimaryButton from './PrimaryButton';
import DialCodeInput from './DialCodeInput';

export default function ContactForm({className}:{className?:string}) {

  return (
    <form
      className={clsx(
        'p-6 bg-black06 rounded-lg shadow-md transition-opacity duration-700 ease-out',
       className
      )}
    >
      <div className='grid grid-cols-8  gap-x-5 gap-y-10 '>

      <InputComponent className='md:col-span-4 col-span-8' label='First Name' placeholder="Enter First Name" id="name" type="text" />
      <InputComponent className='md:col-span-4 col-span-8' label="Last Name" id="last" type="text" placeholder='Enter Last Name'/>
      <InputComponent className='md:col-span-4 col-span-8' label="ُEmail " id="email" type="email" placeholder='Enter Your Email'/>
      
      <DialCodeInput  className='md:col-span-4 col-span-8' id='phone' label="Phone Number"  placeholder='Enter Phone Number' />
      <InputComponent className='col-span-8' label="Message"  placeholder='Enter your Message' id="message" type="textarea" />
      <div
      className='col-span-8 flex flex-col md:flex-row gap-10 items-center md:justify-between '
      >
        <div className="flex items-center gap-2 text-sm  text-subtitle">
  <input
    id="terms"
    type="checkbox"
    className="w-6 h-6 text-blue-600 border-black06 rounded focus:ring-blue-500"
  />
  <label htmlFor="terms" className="cursor-pointer">
    I agree with <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>
  </label>
</div>

      <PrimaryButton 
       title='  Send Message' 
       className='flex justify-center max-w-[85%]'/>
       </div>
      </div>
    </form>
  );
}

