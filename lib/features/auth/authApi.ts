import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';
import Cookies from 'js-cookie';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: 'users/create-user',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        userLoggedIn({
                            user: data.user,
                        }),
                    );

                    Cookies.set('accessToken', data.accessToken, {
                        expires: 7,
                        sameSite: 'Strict',
                        secure: true,
                    });
                } catch (error) {
                    throw new Error((error as Error).message);
                }
            },
            invalidatesTags: ['Users'],
        }),
    }),
});

export const { useSignUpMutation } = authApi;
