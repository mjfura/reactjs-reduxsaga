import logo from '@/assets/svgs/logo.svg'
import logoAppStore from '@/assets/svgs/logo_ios.svg'
import logoGooglePlay from '@/assets/svgs/logo_play_store.svg'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="flex flex-col items-center py-4 gap-6 bg-black ">
            <div>
                <Image
                    src={logo}
                    alt="logo tomatoes"
                />
            </div>
            <div className="flex gap-4">
                <Image
                    src={logoAppStore}
                    alt="app store logo"
                />
                <Image
                    src={logoGooglePlay}
                    alt="play store logo"
                />
            </div>
            <div>
                <p className="text-white font-light text-xs ">
                    © Copyright 2022 Dreadful Tomatoes. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
