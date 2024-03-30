"use client";

import { ChangeEvent, useState } from "react";

const FormFields = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		phoneNumber: "",
	});

	const [isValid, setIsValid] = useState(false);

	const validateName = (name: string) => {
		const regex = /^[a-zA-Z]+$/;
		return regex.test(name);
	};

	const validateEmail = (email: any) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const validatePhoneNumber = (phoneNumber: any) => {
		const regex = /^\d+$/;
		return regex.test(phoneNumber);
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		// Validation checks
		if (name === "fullName" && !validateName(value)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: "Only letters are allowed",
			}));
			return;
		}

		// if (name === "phoneNumber" && !validatePhoneNumber(value)) {
		// 	setErrors((prevErrors) => ({
		// 		...prevErrors,
		// 		[name]: "Only numbers are allowed",
		// 	}));
		// 	return;
		// }

		// if (name === "email" && !validateEmail(value)) {
		// 	setErrors((prevErrors) => ({
		// 		...prevErrors,
		// 		[name]: "Enter a valid email address",
		// 	}));
		// 	return;
		// }

		// Clear the error if the value is valid
		setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

		// Update the form data
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (!formData.fullName || !validateName(formData.fullName)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				fullName:
					"Please enter a valid first name with only characters.",
			}));
			setIsValid(false);
		} else {
			setIsValid(true);
		}

		if (!formData.email || !validateEmail(formData.email)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				email: "Please enter a valid email address.",
			}));
			setIsValid(false);
		} else {
			setIsValid(true);
		}

		if (
			!formData.phoneNumber ||
			!validatePhoneNumber(formData.phoneNumber)
		) {
			setErrors((prevErrors) => ({
				...prevErrors,
				phoneNumber:
					"Please enter a valid phone number with only numbers.",
			}));
			setIsValid(false);
		} else {
			setIsValid(true);
		}

		// If all validations pass, you can proceed with form submission
		if (isValid) {
			// Perform form submission logic here
			console.log("Form submitted:", formData);
		}
	};

	const inputWrap = `w-full lg:max-h-[64px] transition-all duration-300 ease-in-out relative mb-[24px] md:mb-[30px]`;
	const inputField = `bg-[#262849] px-[32px] py-[24px] md:py-[20px] rounded-[8px] w-full h-full text-[20px] leading-[24px] text-primaryLight font-[400]`;
	const errorMsg = `text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-red-600 font-bold transition-all duration-300 ease-in-out`;

	return (
		<form
			onSubmit={handleSubmit}
			className="mt-[10px] md:mt-[20px]">
			<div className={`${inputWrap}`}>
				<input
					type="text"
					name="fullName"
					className={`${inputField}`}
					placeholder="Full Name"
					value={formData.fullName}
					onChange={handleChange}
				/>
				{errors.fullName && (
					<p className={`${errorMsg}`}>{errors.fullName}</p>
				)}
			</div>
			<div className={`${inputWrap}`}>
				<input
					type="text"
					className={`${inputField}`}
					id="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && (
					<p className={`${errorMsg}`}>{errors.email}</p>
				)}
			</div>
			{/* <AnimateInView
				reset={false}
				animation={"translateFromBottom"}
				delay={0.6}>
				<div className={`${inputWrap}`}>
					<input
						type="text"
						className={`${inputField}`}
						name="phoneNumber"
						placeholder="Phone Number"
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
					{errors.phoneNumber && (
						<p className={`${errorMsg}`}>{errors.phoneNumber}</p>
					)}
				</div>
			</AnimateInView> */}
			<div className={`${inputWrap} min-h-[124px]`}>
				<textarea
					id="message"
					className={`${inputField} h-full w-full min-h-[124px]`}
					name="message"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}
				/>
			</div>
			<button
				className="text-[24px] leading-[30px] md:text-[26px] md:leading-[32px] font-[400] text-center w-full max-h-[80px] rounded-[8px] px-[15px] py-[10px] md:px-[25px] md:py-[15px] bg-primaryBlue text-primaryLight break-words max-lg:mx-auto"
				type="submit">
				Send
			</button>
		</form>
	);
};

export default FormFields;
