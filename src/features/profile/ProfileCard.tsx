import React from 'react'

interface ProfileCardProps {
    name: string
    role: string
    avatarUrl: string
    bgColor: 'bg-black' | 'bg-white'
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatarUrl }) => {
    return (
        <div className="card overflow-hidden">
            <img
                src={avatarUrl}
                alt={name}
                className="h-48 w-full object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-neutral-100">
                    {name}
                </h3>
                <p className="text-muted mt-2">{role}</p>
                <button className="btn btn-primary mt-4 w-full">
                    View Profile
                </button>
            </div>
        </div>
    )
}

export default ProfileCard
