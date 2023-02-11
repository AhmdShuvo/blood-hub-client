import React from 'react';
import { useState } from 'react';
import { storage } from '../../Hooks/useFirebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from 'firebase/auth';
import useAuth from '../../Hooks/useAuth';

const UserProfle = () => {
    const [image, setImage] = useState()
    const [url, setUrl] = useState();
    const [success, setSuccess] = useState(false);
    const { user } = useAuth()

    const handleUpdate=e=>{
   
          e.preventDefault()


        const imageRef = ref(storage, user.email+"image");
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {
                       setUrl(url)

                        updateProfile(user, {
                         photoURL:url,
                           
                        });


                    })
                    .catch((error) => {
                        console.log(error.message, "error getting the image url");
                    });
                setImage(null);
            })
            .catch((error) => {
                console.log(error.message);
            }).finally(() => {
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                  }, 5000);
            });


    }
    return (
        <div className='container my-10 mx-auto px-2'>
           <form onSubmit={handleUpdate} action="">
           <div>
           {
                            success&& <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <span class="font-medium">Photo Updated</span>Please Reload the page to see the changes                        </div>
                           }
                <label class="block text-sm font-medium text-dark">
                    Image
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-dark" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-dark">
                            <input onChange={(e) => {
                                if (e.target.files[0]) {
                                    setImage(e.target.files[0]);
                                }
                            }} type="file" name="" id="" />
                            <p class="pl-1 text-dark">or drag and drop</p>
                        </div>
                        <p class="text-xs text-dark">
                            PNG, JPG, GIF up to 10MB
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-6 flex justify-end mt-10 ">
            <button className="px-6 flex justify-end py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" type='submit'>Upload DP</button>
            </div>

          
           </form>
        </div>
    );
};

export default UserProfle;