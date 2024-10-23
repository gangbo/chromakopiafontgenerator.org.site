import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button"

const SocialShareButtons = () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const title = "Check out this awesome game!";

    return (
        <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}>
                <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank')}>
                <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank')}>
                <Linkedin className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default SocialShareButtons;