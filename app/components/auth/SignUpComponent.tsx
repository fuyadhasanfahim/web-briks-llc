'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import React, { FormEvent, useState } from 'react';
import InputComponent from '../shared/components/InputComponent';
import toast from 'react-hot-toast';

export default function SignUpComponent() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const formData = {
                name,
                username,
                email,
                phone,
                company,
                country,
                address,
                password,
            };

            console.log(formData);
        } else {
            toast.error('Passwords do not match! Try again...');
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-xl font-semibold">
                        Create your Account
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* For Name */}
                    <InputComponent
                        id="name"
                        name="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        setValue={setName}
                        required={true}
                        autocomplete="name"
                    />
                    {/* For Username */}
                    <InputComponent
                        id="username"
                        name="Username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        setValue={setUsername}
                        required={true}
                        autocomplete="username"
                    />
                    {/* For Email */}
                    <InputComponent
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        setValue={setEmail}
                        required={true}
                        autocomplete="email"
                    />
                    {/* For Phone */}
                    <InputComponent
                        id="phone"
                        name="Phone Number"
                        type="tel" // changed to standard `tel`
                        placeholder="Enter your phone number with country code"
                        value={phone}
                        setValue={setPhone}
                        required={true}
                        autocomplete="tel" // updated to standard `tel`
                    />
                    {/* For Company */}
                    <InputComponent
                        id="company"
                        name="Company"
                        type="text"
                        placeholder="Enter your company name"
                        value={company}
                        setValue={setCompany}
                        required={true}
                        autocomplete="organization"
                    />
                    {/* For Country */}
                    <InputComponent
                        id="country"
                        name="Country"
                        type="text"
                        placeholder="Enter your country"
                        value={country}
                        setValue={setCountry}
                        required={true}
                        autocomplete="country"
                    />
                    {/* For Address */}
                    <InputComponent
                        id="address"
                        name="Address"
                        type="text"
                        placeholder="Enter your address"
                        value={address}
                        setValue={setAddress}
                        required={true}
                        autocomplete="address-line1"
                    />
                    {/* For Password */}
                    <InputComponent
                        id="password"
                        name="Password"
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        setValue={setPassword}
                        required={true}
                        autocomplete="new-password"
                    />
                    {/* For Confirm Password */}
                    <InputComponent
                        id="confirmPassword"
                        name="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                        required={true}
                        autocomplete="new-password"
                    />
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
