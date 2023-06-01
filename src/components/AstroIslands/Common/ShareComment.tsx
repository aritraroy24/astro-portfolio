import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { HiRss } from 'react-icons/hi';
import { IoLogoTumblr } from 'react-icons/io';
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineReddit } from 'react-icons/ai';
import { FaLinkedinIn, FaPinterestP, FaTumblr } from 'react-icons/fa'
import Giscus from '@giscus/react';
import "./styles/ShareComment.scss";

interface ShareCommentProps {
  postType: string;
  rssUrl: string;
}

const ShareComment: React.FC<ShareCommentProps> = ({ postType, rssUrl }) => {
  const currentURL = window.location.href;
  const encodedUrl = encodeURIComponent(currentURL);
  return (
    <div className="shareCommentContainer">
      <p className="shareText">---&nbsp;&nbsp; Share This {postType} Via&nbsp;&nbsp; ---</p>
      <div className="shareBtnContainer">
        <a title="Twitter" target="_blank" href={`https://twitter.com/share?url=${encodedUrl}`}>
          <AiOutlineTwitter className="shareIcon" />
        </a>
        <a title="WhatsApp" target="_blank" data-action="share/whatsapp/share" href={`https://api.whatsapp.com/send?text=${encodedUrl}`}>
          <AiOutlineWhatsApp className="shareIcon" />
        </a>
        <a title="LinkedIn" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}>
          <FaLinkedinIn className="shareIcon" />
        </a>
        <a title="Pinterest" target="_blank" href={`https://www.pinterest.com/pin/create/button/?url=${encodedUrl}`}>
          <FaPinterestP className="shareIcon" />
        </a>
        <a title="Facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}>
          <GrFacebookOption className="shareIcon" />
        </a>
        <a title="Reddit" target="_blank" href={`https://www.reddit.com/submit?url=${encodedUrl}`}>
          <AiOutlineReddit className="shareIcon" />
        </a>
        <a title="Tumblr" target="_blank" href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodedUrl}`}>
          <IoLogoTumblr className="shareIcon" />
        </a>
        <a title="RSS Feed" target="_blank" href={rssUrl}>
          <HiRss className="shareIcon" />
        </a>
      </div>
      <Giscus
        id="comments"
        repo="aritraroy24/astro-portfolio-comments"
        repoId="R_kgDOJktf8w"
        category="General"
        categoryId="DIC_kwDOJktf884CWlVH"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="dark_high_contrast"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
export default ShareComment