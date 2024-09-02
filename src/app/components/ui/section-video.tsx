import HeroVideoDialog from "@/app/components/ui/ hero-video-dialog";



function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/BrIi6F9PErk"
        thumbnailSrc="https://ssitecraft.vercel.app/banner.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/BrIi6F9PErk"
        thumbnailSrc="https://ssitecraft.vercel.app/banner.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

export default HeroVideoDialogDemo;
