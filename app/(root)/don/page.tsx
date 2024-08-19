import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"

const page = () => {
  return (
    <>
        <header className="py-16">
            <div className="container mx-auto flex justify-between items-center py-4">

                <nav className="md:flex md:flex-grow justify-center">
                    <img src='./icons/heart.png' className='lg:w-24 lg:h-24 md:w-10 md:h-10'/>
                    <span className='text-center items-center lg:text-8xl md:text-3xl ml-5'>Faites un don</span>
                </nav>
            </div>
        </header>

        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-3xl mx-auto p-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Payement</h1>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Informations du donateur</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">Nom</label>
                                <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">Prénom</label>
                                <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Email</label>
                            <input type="text" id="address" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Ville</label>
                            <input type="text" id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                        </div>

                        <div className="mt-4">
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">Laissez nous un message</label>
                                <Textarea />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2 mt-10">Info de payement</h2>
                        <div className="mt-4">
                            <label className="block text-gray-700 dark:text-white mb-1">Numéro de carte</label>
                            <input type="text" id="card_number" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">Montant</label>
                                <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-1">CVV</label>
                                <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800">Donner</button>
                        </div>
                    </div>

                      <Separator className="border-1 border-gray-100 my-7" />

                     <div>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payement Mobile</h2>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                               <img src='./icons/orange-money.jpg' className='rounded-lg w-36 h-16'/>
                            </div>
                            <div>
                                <img src='./icons/mobile-money.png' className='rounded-lg w-36 h-16'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>


    </>
  )
}

export default page