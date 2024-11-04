'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SignInComponent from '@/app/components/auth/SignInComponent';
import SignUpComponent from '../components/auth/SignUpComponent';
import { useSignUpMutation } from '@/lib/features/auth/authApi';

export default function AuthPage() {
    console.log(useSignUpMutation());

    return (
        <div className="h-full min-h-screen w-full flex items-center justify-center mx-auto">
            <div className="w-full max-w-md m-20">
                <Tabs defaultValue="Sign In">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="Sign In">Sign In</TabsTrigger>
                        <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Sign In">
                        <SignInComponent />
                    </TabsContent>
                    <TabsContent value="Sign Up">
                        <SignUpComponent />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
