import { useState } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Radio
} from "@material-tailwind/react";
import Input from './input';

const RightSide = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [formData, setFormData] = useState({ email: "", password: "", termsCondition: false });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const submitForm = async () => {
        let errors = {};
        if (!formData.email) {
            errors.email = "This field cannot be left blank";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Enter a valid email address";
        }
        if (!formData.password) {
            errors.password = "This field cannot be left blank";
        } else if (formData.password.length < 8 || !/\d/.test(formData.password) || !/[a-zA-Z]/.test(formData.password) || !/[^a-zA-Z0-9]/.test(formData.password)) {
            errors.password = "Password must be at least 8 characters long and include a mix of letters, numbers, and symbols";
        }
        if (!formData.termsCondition) {
            errors.termsCondition = "Please accept the terms and conditions to finish the signup"
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
        if (isFormValid) {

        } else {
            console.log(errors)
        }
    };

    return (
        <div className='w-full md:w-[55%] overflow-auto bg-white md:rounded-l-2xl px-2 md:px-6 py-4'>
            <div>
                <div className='flex items-center justify-between w-full h-[8%]'>
                    <Menu>
                        <MenuHandler>
                            <div className='flex items-center gap-0 cursor-pointer'>
                                <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fill-rule="evenodd"></path></svg>
                                <p className='text-[#5e5e5e] hover: ml-2'>English</p>
                                <svg className='ml-1' fill="none" height="5" viewBox="0 0 9 5" width="9" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z" fill="#5E5E5E" fill-rule="evenodd"></path></svg>
                            </div>
                        </MenuHandler>
                        <MenuList className='min-w-[110px] w-[110px] px-0'>
                            <MenuItem className='rounded-none py-2 flex items-center justify-center'>English</MenuItem>
                            <MenuItem className='rounded-none py-2 flex items-center justify-center'>Español</MenuItem>
                        </MenuList>
                    </Menu>
                    <div className='flex items-center text-sm md:text-normal gap-1 font-light'>
                        <p>Already have an account?</p>
                        <button className='px-4 h-7 border border-black rounded-md text-sm font-light'>Login</button>
                    </div>
                </div>
                <div className='h-[92%]  flex flex-col items-center py-10 gap-7'>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clip-rule="evenodd"></path></svg>
                        <span class="sc-da9128ae-0 bmXElW">
                            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" class="sc-da9128ae-1 bOQHzD"><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg>
                        </span>
                    </div>
                    <p className='text-2xl text-gray-500 font-extralight text-center'>Get better data with conversational forms, surveys, <br />quizzes & more.</p>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && (
                        <div className='flex items-center gap-1 w-[80%] md:w-1/3'>
                            <svg color='red' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="red"></path> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="red"></path></svg>
                            <p className='text-red-500 text-sm font-light'>{errors.email}</p>
                        </div>
                    )}
                    <Input
                        type="Password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        rightElement={<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="#1C274C" stroke-width="1.5" />
                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5" />
                        </svg>}
                    />
                    {errors.password && (
                        <div className='flex items-center gap-1 w-[80%] md:w-1/3'>
                            <svg color='red' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill="red"></path> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="red"></path></svg>
                            <p className='text-red-500 text-sm font-light'>{errors.password}</p>
                        </div>
                    )}
                    <div className='w-[80%] md:w-1/3'>
                        <label>
                            <input value={formData.termsCondition}
                                onChange={(e) => setFormData({ ...formData, termsCondition: !formData.termsCondition })}
                                type='checkbox' />
                            <span className='text-md ml-2 text-sm'>I agree to Typeform's <span className='underline'>Terms of Service</span>, <span className='underline'>Privacy Policy</span> and <span className='underline'>Data Processing Agreement</span>.</span>
                        </label>
                        {errors.termsCondition && (
                            <div className='flex items-center gap-1'>
                                <p className='text-red-500 text-sm font-light'>{errors.termsCondition}</p>
                            </div>
                        )}
                    </div>
                    <Accordion open={open === 1} className='w-[80%] md:w-1/3'>
                        <AccordionHeader onClick={() => handleOpen(1)} className='border-none flex items-center justify-between w-full relative'>
                            <p className='text-sm text-[#191919] font-normal'>See options</p>
                            <svg className={`${open === 1 ? "rotate-180" : ""} transition-all duration-200 absolute right-0`} width="12" height="7" viewBox="0 0 12 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"></path></svg>
                        </AccordionHeader>
                        <AccordionBody>
                            <p className='text-sm font-normal'>Get useful tips, inspiration, and offers via e-communication.</p>
                            <div className='flex items-center gap-4'>
                                <Radio name="type" label="Yes" />
                                <Radio name="type" label="No" defaultChecked />
                            </div>
                            <p className='text-sm font-normal'>Tailor Typeform to my needs based on my activity.See Privacy Policy</p>
                            <div className='flex items-center gap-4'>
                                <Radio name="tailor" label="Yes" />
                                <Radio name="tailor" label="No" defaultChecked />
                            </div>
                            <p className='text-sm font-normal'>Enrich my data with select third parties for more relevant content.See Privacy Policy</p>
                            <div className='flex items-center gap-4'>
                                <Radio name="policy" label="Yes" defaultChecked />
                                <Radio name="policy" label="No" />
                            </div>
                            <p className='text-sm '>You can update your preferences in your Profile at any time</p>
                        </AccordionBody>
                    </Accordion>
                    <button onClick={submitForm} className='bg-[#191919] w-[80%] md:w-1/3 text-white py-2 rounded'>Create my free account</button>
                </div>
            </div>
        </div>
    )
}

export default RightSide