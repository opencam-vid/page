import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const galleryRef = useRef(null)
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView && galleryRef.current) {
      // 检查是否已经播放过动画
      const hasPlayedAnimation = sessionStorage.getItem('gallery-animation-played')
      
      if (!hasPlayedAnimation) {
        // 首次加载时播放动画
        gsap.fromTo(
          galleryRef.current.children,
          {
            y: 50,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
          }
        )
        // 标记动画已播放
        sessionStorage.setItem('gallery-animation-played', 'true')
      } else {
        // 非首次加载时直接设置最终状态
        gsap.set(galleryRef.current.children, {
          y: 0,
          opacity: 1,
          scale: 1
        })
      }
    }
  }, [inView, selectedCategory, showMore])

  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'urban', name: 'Urban' },
    { id: 'natural', name: 'Natural' },
    { id: 'rural', name: 'Rural' },
    { id: 'interior', name: 'Interior' },
    { id: 'waterfront', name: 'Waterfront' },
  ]

  const galleryItems = [
    {
      id: 1,
      title: '-hGQfHfuyd8_151',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/-hGQfHfuyd8_151/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/-hGQfHfuyd8_151/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/-hGQfHfuyd8_151/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 2,
      title: '05npYIgBnqo_3',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/05npYIgBnqo_3/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/05npYIgBnqo_3/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/05npYIgBnqo_3/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 3,
      title: '4puCK-UZ-nI_26',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/4puCK-UZ-nI_26/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/4puCK-UZ-nI_26/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/4puCK-UZ-nI_26/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 4,
      title: '8Qp19S1m5Ns_337',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/8Qp19S1m5Ns_337/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/8Qp19S1m5Ns_337/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/8Qp19S1m5Ns_337/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 5,
      title: 'B1hUyHTeSn4_2',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/B1hUyHTeSn4_2/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/B1hUyHTeSn4_2/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/B1hUyHTeSn4_2/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 6,
      title: 'C94J0Ye8_20_199',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/C94J0Ye8_20_199/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/C94J0Ye8_20_199/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/C94J0Ye8_20_199/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 7,
      title: 'CfZQjFsSsg4_1030',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/CfZQjFsSsg4_1030/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/CfZQjFsSsg4_1030/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/CfZQjFsSsg4_1030/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 8,
      title: 'EzqNtmkSEq4_454',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/EzqNtmkSEq4_454/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/EzqNtmkSEq4_454/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/EzqNtmkSEq4_454/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 9,
      title: 'FC0_lWwt4M0_200',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/FC0_lWwt4M0_200/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/FC0_lWwt4M0_200/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/FC0_lWwt4M0_200/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 10,
      title: 'IvK1WHREGxs_171',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/IvK1WHREGxs_171/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/IvK1WHREGxs_171/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/IvK1WHREGxs_171/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 11,
      title: 'NMl_K1H1FwE_18',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/NMl_K1H1FwE_18/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/NMl_K1H1FwE_18/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/NMl_K1H1FwE_18/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 12,
      title: 'QWbmiMWc4TY_8',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/QWbmiMWc4TY_8/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/QWbmiMWc4TY_8/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/QWbmiMWc4TY_8/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 13,
      title: 'UnzIN-d3RVg_111',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/UnzIN-d3RVg_111/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/UnzIN-d3RVg_111/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/UnzIN-d3RVg_111/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 14,
      title: 'VukLV0AoeFA_136',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/VukLV0AoeFA_136/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/VukLV0AoeFA_136/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/VukLV0AoeFA_136/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 15,
      title: 'WL5wNC3vEXc_189',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/WL5wNC3vEXc_189/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/WL5wNC3vEXc_189/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/WL5wNC3vEXc_189/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 16,
      title: 'XqjZKkWlzsU_323',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/XqjZKkWlzsU_323/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/XqjZKkWlzsU_323/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/XqjZKkWlzsU_323/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 17,
      title: 'Xy4d3Siuy3s_6',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/Xy4d3Siuy3s_6/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/Xy4d3Siuy3s_6/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/Xy4d3Siuy3s_6/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 18,
      title: 'gmHqhYVqyxM_183',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/gmHqhYVqyxM_183/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/gmHqhYVqyxM_183/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/gmHqhYVqyxM_183/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 19,
      title: 'hO9bi5_FrPw_185',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/hO9bi5_FrPw_185/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/hO9bi5_FrPw_185/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/hO9bi5_FrPw_185/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 20,
      title: 'i_bChYr7fOg_218',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/i_bChYr7fOg_218/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/i_bChYr7fOg_218/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/i_bChYr7fOg_218/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 21,
      title: 'lCQK_Kyiw-Q_138',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/lCQK_Kyiw-Q_138/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/lCQK_Kyiw-Q_138/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/lCQK_Kyiw-Q_138/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 22,
      title: 'lLFWNT9q9kQ_65',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/lLFWNT9q9kQ_65/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/lLFWNT9q9kQ_65/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/lLFWNT9q9kQ_65/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 23,
      title: 'lU6o1vHDZ9U_409',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/lU6o1vHDZ9U_409/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/lU6o1vHDZ9U_409/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/lU6o1vHDZ9U_409/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 24,
      title: 'o6h1Iz_T4QQ_57',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/o6h1Iz_T4QQ_57/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/o6h1Iz_T4QQ_57/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/o6h1Iz_T4QQ_57/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 25,
      title: 'oEds4e1xEys_258',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/oEds4e1xEys_258/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/oEds4e1xEys_258/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/oEds4e1xEys_258/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 26,
      title: 't10WpeKJ6OI_52',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/t10WpeKJ6OI_52/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/t10WpeKJ6OI_52/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/t10WpeKJ6OI_52/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 27,
      title: 'tCqeAUFRc_k_6',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/tCqeAUFRc_k_6/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/tCqeAUFRc_k_6/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/tCqeAUFRc_k_6/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 28,
      title: 'tZ-FNKHH5hk_31',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/tZ-FNKHH5hk_31/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/tZ-FNKHH5hk_31/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/tZ-FNKHH5hk_31/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 29,
      title: 'ugOqZOJvPuc_2',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/ugOqZOJvPuc_2/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/ugOqZOJvPuc_2/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/ugOqZOJvPuc_2/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 30,
      title: 'xwTdumXhyEM_171',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/xwTdumXhyEM_171/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/xwTdumXhyEM_171/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/xwTdumXhyEM_171/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 31,
      title: 'yi_SDDfnaTs_140',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/yi_SDDfnaTs_140/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/yi_SDDfnaTs_140/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/yi_SDDfnaTs_140/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 32,
      title: 'ysLl37C6Q10_246',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/ysLl37C6Q10_246/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/ysLl37C6Q10_246/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/ysLl37C6Q10_246/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    },
    {
      id: 33,
      title: 'zUzLSpMOX58_202',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: An aged stone structure overlooks a turquoise-hued lake beneath softly lit mountains, evoking a tranquil atmosphere filled with natural color and quiet majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene presents a picturesque landscape featuring a stone structure overlooking a lake and mountains. The water has a turquoise hue, and the foliage is lush green. The stone structure appears aged and weathered, with a glimpse of a garden visible through an archway. The mountains in the background are bathed in a soft, blue light, creating a tranquil atmosphere. The overall tone is serene and peaceful.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts right and forward, unveiling a timeless stone edifice perched above a shimmering lake. The water glows turquoise under a bright sky, while distant mountains bathed in light frame a scene of serene beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a vast landscape. Its path is consistent, with no abrupt changes—only a smooth, continuous translation that emphasizes the expansive scene ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/zUzLSpMOX58_202/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/zUzLSpMOX58_202/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/zUzLSpMOX58_202/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: ['Waterfront (Lake View)', 'Bright', 'Daytime', 'Sunny', 'Deserted']
    }
  ]


  const filteredItems = (selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory))
    .sort((a, b) => a.id - b.id)

  // 根据showMore状态决定显示的样例数量
  const displayedItems = showMore ? filteredItems : filteredItems.slice(0, 9)

  return (
    <section id="gallery" ref={ref} className="pt-20 pb-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center mb-6">
            <span className="gradient-text">Samples</span>
          </h2>
          <p className="text-2xl 2xl:text-3xl text-gray-500 max-w-[70vw] mx-auto mb-4">
            Click the tags to filter, and click the samples to view detailed information
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg'
                  : 'bg-[#d3e8fd] text-gray-400 hover:bg-[#d3e8fd] hover:text-gray-500 hover:shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* 图片网格 */}
        <motion.div
          ref={galleryRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] transition-shadow duration-300 group-hover:shadow-2xl">
                  {/* 图片 */}
                  <video
                src={item.videos[0].src}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                autoPlay
                loop
                muted
                playsInline
              />
                  
                  {/* 放大图标 */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore more samples 按钮 */}
        {filteredItems.length > 9 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{showMore ? 'Show Less' : 'Show More Samples'}</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        )}

        {/* 图片模态框 */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => {
                    setSelectedImage(null)
                    setIsDescriptionExpanded(false)
                  }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative rounded-2xl overflow-hidden flex flex-col"
                onWheel={(e) => {
                  // 只允许描述区域滚动，阻止其他区域的滚动事件冒泡
                  if (!e.target.closest('.overflow-y-auto')) {
                    e.preventDefault()
                  }
                }}
                style={{ 
                  // 超大屏幕(>1440px)
                  '@media (min-width: 1441px)': {
                    maxWidth: '75vw',
                    width: 'min(75vw, 1000px)',
                    height: 'min(80vh, 1000px)'
                  },
                  // 大屏幕(1024px-1440px)
                  maxWidth: '75vw',
                  width: 'min(75vw, 800px)',
                  height: 'min(80vh, 800px)',
                  // 中屏幕(768px-1024px): 最大宽度75vw,最大高度85vh
                  '@media (max-width: 1024px)': {
                    maxWidth: '75vw',
                    width: 'min(75vw, 700px)',
                    height: 'min(80vh, 700px)'
                  },
                  // 小屏幕(<768px): 最大宽度90vw,最大高度80vh
                  '@media (max-width: 768px)': {
                    maxWidth: '90vw', 
                    width: 'min(90vw, 600px)',
                    height: 'min(80vh, 600px)'
                  },
                  backgroundColor: '#eef5ff'
                }}
                onClick={(e) => e.stopPropagation()}
Natraz              >
                {/* 上半部分：Video展示区域 */}
                <div className={`${isDescriptionExpanded ? 'h-1/4' : 'h-3/5'} p-6 min-h-0 transition-all duration-300`}>
                  <div className="grid gap-4 h-full" style={{gridTemplateColumns: '2fr 1fr'}}>
                    {/* 第一列：Video Clip */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="aspect-video rounded-lg overflow-hidden w-full">
                        <video
                            ref={(el) => {
                              if (el && selectedImage.videos) {
                                el.currentTime = 0;
                                el.play();
                              }
                            }}
                            src={selectedImage.videos?.[0]?.src}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                          />
                      </div>
                      <span className="mt-3 text-xs md:text-sm lg:text-md xl:text-lg 2xl:text:xl text-gray-600 font-medium text-center">
                        {selectedImage.videos?.[0]?.title}
                      </span>
                    </div>
                    
                    {/* 第二列：Depth 和 Camera Pose */}
                    <div className="grid grid-rows-2 gap-0 h-full">
                      {/* Depth */}
                      <div className="flex flex-col items-center justify-center px-0">
                        <div className="aspect-video rounded-lg overflow-hidden w-full">
                          <video
                            ref={(el) => {
                              if (el && selectedImage.videos) {
                                el.currentTime = 0;
                                el.play();
                              }
                            }}
                            src={selectedImage.videos?.[1]?.src}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                          />
                        </div>
                        <span className="mt-1 text-xs md:text-sm lg:text-md xl:text-lg 2xl:text:xl text-gray-600 font-medium text-center">
                          {selectedImage.videos?.[1]?.title}
                        </span>
                      </div>
                      
                      {/* Camera Pose */}
                      <div className="flex flex-col items-center justify-center px-0">
                        <div className="aspect-video rounded-lg overflow-hidden w-full">
                          <video
                            ref={(el) => {
                              if (el && selectedImage.videos) {
                                el.currentTime = 0;
                                el.play();
                              }
                            }}
                            src={selectedImage.videos?.[2]?.src}
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            disablePictureInPicture
                          />
                        </div>
                        <span className="mt-1 text-xs md:text-sm lg:text-md xl:text-lg 2xl:text:xl text-gray-600 font-medium text-center">
                          {selectedImage.videos?.[2]?.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 下半部分：描述和标签 */}
                <motion.div 
                  className="p-6 bg-white/95 flex flex-col border-t border-gray-200"
                  animate={{
                    height: isDescriptionExpanded ? '75%' : '40%'
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ height: isDescriptionExpanded ? '75%' : '40%' }}
                >
                  {/* 展开/收起按钮 */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg 2xl:text-xl font-semibold text-gray-800">Captions</h3>
                    <button
                      onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm md:text-base relative z-50"
                    >
                      {isDescriptionExpanded ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          Collapse
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          Expand
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto mb-4 min-h-0 relative z-50" onWheel={(e) => e.stopPropagation()}>
                    <div className="text-gray-700 text-base leading-relaxed h-full">
                      {isDescriptionExpanded ? (
                        selectedImage.description
                      ) : (
                        // 只显示第一项描述
                        typeof selectedImage.description === 'string' ? (
                          <div className="text-gray-700 text-base md:text-sm lg:text-md xl:text-base 2xl:text-xl leading-relaxed">
                            {selectedImage.description.split('。')[0] + '。'}
                          </div>
                        ) : (
                          <div style={{lineHeight: '1.4', textAlign: 'left'}}>
                            <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• 展示我们最新开发的<strong style={{color: '#0071e3'}}>深度学习模型架构</strong>，具有创新的<strong>注意力机制</strong>。</div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {selectedImage.tech.map((tech, index) => (
                      <span
                        key={`${selectedImage.id}-tech-${index}-${tech}`}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
                

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery