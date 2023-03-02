import React from 'react'
import {TwitterShareButton, LinkedinShareButton, EmailShareButton, TwitterIcon, LinkedinIcon, EmailIcon, RedditIcon, RedditShareButton, RedditShareCount} from 'react-share'

const Share = ({props}) => {
  return (
    <div>
    <div className='share'>
      <TwitterShareButton
        url={props.url}
        title={props.title}
        className='share-page-button'>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <div className='share-page-count'>
        &nbsp;
        </div>
    </div>
    <div className='share'>
        <LinkedinShareButton
          url={props.url}
          title={props.title}
        windowWidth={750}
        windowHeight={600}
        className='share-page-button'>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

        <div className='share-page-count'>&nbsp;</div>
      </div>

    <div className='share'>
        <EmailShareButton
          url={props.url}
          subject={props.title}
          body='body'
          className='share-page-button'>
        <EmailIcon size={32} round />
      </EmailShareButton>
      </div>

      <div className='share'>
        <RedditShareButton
          url={props.url}
          title={props.title}
          windowWidth={660}
          windowHeight={460}
          className='share-page-button'>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <RedditShareCount url={props.url} className='share-page-count'/>
</div>
    </div>
  )
}

export default Share