import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card'
import { Button } from '../../components/ui/button'

interface ProfileCardProps {
    name: string
    role: string
    avatarUrl: string
    bgColor: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, avatarUrl }) => {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-square w-full overflow-hidden bg-muted/20">
                <img
                    src={avatarUrl}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-xl">{name}</CardTitle>
                <CardDescription>{role}</CardDescription>
            </CardHeader>
            <CardContent>
                <Button className="w-full">View Profile</Button>
            </CardContent>
        </Card>
    )
}

export default ProfileCard