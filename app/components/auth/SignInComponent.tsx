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

export default function SignInComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-xl font-semibold">
                        Sign in to your Account
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                    {/* For Password */}
                    <InputComponent
                        id="password"
                        name="Password"
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        setValue={setPassword}
                        required={true}
                        autocomplete="password"
                    />
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
