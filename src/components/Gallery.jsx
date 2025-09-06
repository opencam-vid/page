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
      category: 'rural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A peaceful Swiss village sits in a mountainous setting, framed by stone buildings and a natural, blue-hued sky that enhances its realistic, timeless atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a quaint Swiss village nestled in a mountainous region. The camera looks through a stone passageway into a small courtyard surrounded by traditional stone buildings with slate roofs. A patch of green grass occupies the center of the courtyard. In the background, a towering mountain rises against a blue sky. The lighting is natural, with the sky and mountains appearing in their true colors, creating a realistic atmosphere. The overall tone is peaceful and serene, evoking a sense of timelessness.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward through the narrow stone corridor, rising slightly as the village unfolds before it. The tranquil courtyard emerges, bathed in a natural glow, with slate-roofed buildings and a patch of green grass at its heart, all set against a vivid, realistic sky.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera slowly moves forward through the stone passageway, gradually ascending as it reveals the village beyond. It maintains a steady forward translate until reaching the courtyard, where it comes to a complete stop, offering a stable view of the serene landscape.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/05npYIgBnqo_3/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/05npYIgBnqo_3/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/05npYIgBnqo_3/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Rural (Alpine Village)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 3,
      title: '4puCK-UZ-nI_26',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A modern, sunlit living area features high ceilings, wooden beams, and sleek furniture, evoking a sense of comfort and sophistication.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a spacious, modern living area with high ceilings and exposed wooden beams. Large windows offer a view of an outdoor patio and landscape. Two white sofas face each other, flanking a light-colored coffee table. Dark leather armchairs sit near a dining area with a long table and chairs. A kitchen island with bar stools is visible in the background. The room is brightly lit, creating a warm and inviting atmosphere. The overall tone is luxurious and comfortable.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts forward through the airy, sun-drenched room, gliding past sleek sofas and a polished coffee table. As it moves left, the expansive space unfolds, highlighting the elegant design and warm ambiance of the luxurious living area.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly forward, gradually revealing the vast interior space. It then shifts left, sweeping across the open living area. The motion slows as it stabilizes, capturing the room’s luxurious details before subtly moving closer to the scene.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/4puCK-UZ-nI_26/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/4puCK-UZ-nI_26/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/4puCK-UZ-nI_26/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Living Room)',
        'Bright',
        'Deserted'
      ]
    },
    {
      id: 4,
      title: '8Qp19S1m5Ns_337',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A quiet, traditional Chinese street during the day, lined with warmly-lit shops and winding cobblestones, under an overcast sky that enhances its serene atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a quaint, cobblestone street in a traditional Chinese town, likely during the daytime. The sky is overcast, casting a soft, diffused light. Shops line both sides of the street, adorned with traditional architecture and illuminated by warm lights and lanterns. Several people stroll along the street, some dressed in traditional attire, adding to the cultural ambiance. The overall tone is peaceful and inviting, evoking a sense of cultural immersion. The atmosphere is calm and serene.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward down a narrow, lantern-lit street, its path gently shifting left to keep the bustling scene in frame. The soft glow of warm lights reflects off the stones, casting shadows as people move through the peaceful setting.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along the cobblestone street, with a slight leftward drift as it tracks the center of the path. The motion remains smooth and consistent, with minimal lateral adjustments, maintaining a stable perspective on the traditional shops and lantern-lit environment.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/8Qp19S1m5Ns_337/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/8Qp19S1m5Ns_337/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/8Qp19S1m5Ns_337/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Cobblestone Street Scene)',
        'Bright',
        'Daytime',
        'Cloudy',
        'Moderate'
      ]
    },
    {
      id: 5,
      title: 'B1hUyHTeSn4_2',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A neon-lit urban intersection in Tokyo at night, bustling with pedestrians under umbrellas, reflecting in puddles beneath vibrant store signs and towering buildings.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a bustling urban intersection at night, likely in Japan, with numerous pedestrians crossing the street under umbrellas in the rain. The wet pavement reflects the bright neon lights and advertisements of the surrounding buildings, including a prominent Don Quijote store. The atmosphere is vibrant and energetic, despite the rainy weather. The overall tone is one of urban activity and modern city life, with a sense of constant motion and commercial energy.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward through the rain-slicked streets, its path weaving slightly to the left as it passes under umbrellas and past glowing storefronts. The wet pavement mirrors the electric glow of the city, capturing the rhythm of life in a busy, luminous Japanese crosswalk.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward, gliding through the rain-soaked crosswalk as it translates leftward, maintaining a consistent eye-level perspective. The motion is smooth and sustained, with a clear forward trajectory that captures the flowing pedestrian movement and glowing cityscape.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/B1hUyHTeSn4_2/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/B1hUyHTeSn4_2/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/B1hUyHTeSn4_2/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Street Scene)',
        'Bright',
        'Night',
        'Rainy',
        'Crowded'
      ]
    },
    {
      id: 6,
      title: 'C94J0Ye8_20_199',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A sunlit Italian courtyard surrounded by stone buildings, with climbing plants, flower pots, and a staircase leading upward, evoking a peaceful, timeless atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a quaint, sunlit courtyard nestled within a historic Italian village. Stone buildings with shuttered windows enclose the space, their walls adorned with climbing plants and colorful flower pots. A staircase, also decorated with potted plants, leads to an upper level. The courtyard is paved with light-colored stones, reflecting the bright sunlight. The overall atmosphere is peaceful and charming, evoking a sense of timeless beauty and tranquility.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera moves smoothly forward through a shadowed alley, its path tilting slightly downward as it weaves between weathered stone walls. As it emerges into a sun-drenched courtyard, the scene unfolds—stone steps lined with blooming flowers, soft light dancing on ancient stonework, and a quiet, timeless charm enveloping the space.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides steadily forward, moving through a narrow passage as it translates rightward and slightly downward. The motion remains smooth and consistent, gradually revealing an open courtyard with stone steps and potted plants. The forward movement slows as the camera reaches the space, offering a wide view of the historic setting.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/C94J0Ye8_20_199/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/C94J0Ye8_20_199/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/C94J0Ye8_20_199/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Courtyard)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 7,
      title: 'CfZQjFsSsg4_1030',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A quiet urban street is framed by buildings and a concrete wall, with vehicles and pedestrians moving under a soft, overcast sky, evoking a calm, everyday atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A street scene unfolds with buildings lining the left side and a high concrete wall on the right. Several vehicles, including cars and a red motorized cart, move along the road. Pedestrians walk along the street. The sky is a muted blue. The overall atmosphere is calm and somewhat muted in color, with a sense of everyday life unfolding in an urban setting. The lighting is soft, suggesting an overcast day.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward down a quiet street, capturing the slow movement of cars and pedestrians. Buildings line the left side, while a high concrete wall stands on the right. The muted blue sky and soft light enhance the tranquil, everyday rhythm of the scene.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along the street, maintaining a consistent pace. Its position shifts smoothly in the z-direction, creating a steady dolly effect. The x-coordinate decreases slightly, indicating a subtle leftward drift, while the y-coordinate increases, suggesting a slight downward tilt.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/CfZQjFsSsg4_1030/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/CfZQjFsSsg4_1030/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/CfZQjFsSsg4_1030/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Street Scene)',
        'Bright',
        'Daytime',
        'Cloudy',
        'Moderate'
      ]
    },
    {
      id: 8,
      title: 'EzqNtmkSEq4_454',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene lakeside Swiss village features a busy pier, colorful buildings, a church with a dome, and mountainous backdrop under soft overcast light, evoking a peaceful, picturesque atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A picturesque Swiss village scene unfolds on a waterfront. A pier extends into the water, crowded with people walking and gathering. Behind the pier, colorful buildings line the waterfront, including a church with a distinctive dome. Lush green mountains rise in the background, partially obscured by clouds. The scene is bathed in soft, diffused light, suggesting an overcast day. The overall atmosphere is peaceful and inviting, capturing the charm of a lakeside European town.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along the waterfront, drawing viewers closer to the lively pier where people gather. As it moves, a gentle shift to the right keeps the vibrant buildings and towering mountains in frame, capturing the tranquil charm of a Swiss lakeside town under a soft, overcast sky.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera smoothly translates forward, gradually moving toward the pier while subtly shifting right to maintain the scene's composition. The motion is steady and controlled, with a clear directional shift that brings the viewer closer to the bustling waterfront activity.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/EzqNtmkSEq4_454/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/EzqNtmkSEq4_454/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/EzqNtmkSEq4_454/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Waterfront (Lakeside Village)',
        'Dim/Dark',
        'Daytime',
        'Cloudy',
        'Crowded'
      ]
    },
    {
      id: 9,
      title: 'FC0_lWwt4M0_200',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A quiet, snow-dusted city street under overcast skies, lined with tall buildings and marked by piles of snow and shoveling workers, evokes a peaceful yet urban winter atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A snow-covered city street is depicted on a cloudy day. The sidewalk is partially cleared, with snow piled on either side. Tall buildings line the street, and a few people in bright green snowsuits are shoveling snow. A car drives down the street, and various street signs and lights are visible. The atmosphere is cold and quiet, with a sense of the city slowly recovering from a recent snowfall. The overall tone is peaceful, despite the urban setting.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along a snow-covered sidewalk, capturing the hushed stillness of a city recovering from a storm. Tall buildings loom on either side, and distant figures in green suits move through the cold, serene landscape.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a snowy city sidewalk, maintaining a low angle. Slight lateral shifts keep it aligned with the path, while the steady progression through the scene conveys a calm, continuous motion.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/FC0_lWwt4M0_200/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/FC0_lWwt4M0_200/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/FC0_lWwt4M0_200/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Snow-Covered Street)',
        'Dim/Dark',
        'Daytime',
        'Cloudy',
        'Sparse'
      ]
    },
    {
      id: 10,
      title: 'IvK1WHREGxs_171',
      category: 'rural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A winding asphalt road winds through lush green hills, leading toward a serene valley framed by dramatic mountain peaks under a cloudy sky.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A winding asphalt road cuts through a vibrant green hillside, bordered by rustic wooden fences and a low stone wall. The road leads towards a picturesque valley dotted with a small town, framed by towering, jagged mountains in the distance. The sky is a mix of dramatic clouds tinged with blue, suggesting a bright day. A small barn sits atop one of the hills. The overall atmosphere is serene and idyllic, evoking a sense of peaceful rural life.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera moves smoothly down the winding road, its path curving gently to the left as the vast valley opens up ahead. Towering mountains loom in the distance, under the daylight sky, while the peaceful countryside stretches out in every direction.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides steadily forward along the winding road, with a consistent shift to the left as it follows the path. The movement is smooth and continuous, emphasizing the vast landscape unfolding ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/IvK1WHREGxs_171/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/IvK1WHREGxs_171/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/IvK1WHREGxs_171/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Rural (Countryside Road)',
        'Bright',
        'Daytime',
        'Cloudy',
        'Deserted'
      ]
    },
    {
      id: 11,
      title: 'NMl_K1H1FwE_18',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A modern, sunlit living room with a fireplace, kitchen island, and large windows frames a serene, nature-connected interior in a contemporary, neutral-toned environment.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene showcases a modern, open-concept living room and kitchen area. The living room features large windows overlooking a wooded area, a fireplace with a television above it, and comfortable seating. The kitchen has a large island with bar stools and white cabinetry. The room is brightly lit by natural light streaming through the windows. The overall atmosphere is luxurious and inviting, with a focus on natural elements and a clean, contemporary design. The color palette is primarily neutral with brown and green accents.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera sweeps right, unveiling a sleek, sun-drenched living area where a fireplace and kitchen island blend seamlessly. It moves forward, drawing the eye toward vast windows framing a quiet woodland, then pulls back slightly, capturing the room’s elegant openness and tranquil ambiance.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, revealing the full expanse of the open-concept space. It then moves steadily forward, drawing closer to the large windows and the wooded view beyond. A slight backward drift follows, creating a dynamic yet controlled exploration of the room’s luxurious interior.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/NMl_K1H1FwE_18/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/NMl_K1H1FwE_18/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/NMl_K1H1FwE_18/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Living Room and Kitchen)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 12,
      title: 'QWbmiMWc4TY_8',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A scenic bridge spans a lake beneath a blue sky, overlooking a massive concrete spillway framed by green and brown mountains, evoking a grand, natural atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A large spillway dominates the scene, situated on a bridge over a lake with turquoise colored water. The sky is a bright blue, contrasting with the green and brown mountains in the background. The bridge is concrete with metal railings, and a few distant figures can be seen walking along it. The overall atmosphere is natural, with the clear colors creating a realistic impression. The scene evokes a sense of scale and engineering marvel, combined with a striking, natural beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward across the bridge, revealing a vast spillway below. The scenic scene unfolds—blue skies above, green and brown mountains in the distance, and the concrete structure looming ahead, all bathed in a bright, natural light.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward, gliding along the bridge toward the spillway's opening. The motion is smooth and consistent, with a gradual acceleration as it approaches the structure, emphasizing depth and scale.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/QWbmiMWc4TY_8/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/QWbmiMWc4TY_8/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/QWbmiMWc4TY_8/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Waterfront (Bridge Over Lake)',
        'Bright',
        'Daytime',
        'Sunny',
        'Sparse'
      ]
    },
    {
      id: 13,
      title: 'UnzIN-d3RVg_111',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene mountain road winds through lush greenery under a blue sky, framed by snow-capped peaks and soft, bright light that enhances the tranquil, scenic atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A winding asphalt road cuts through a vibrant green landscape, leading towards a backdrop of majestic mountains. The sky is painted with hues of blue and white, suggesting a bright sunny day. The mountains are partially covered in snow, adding to the scenic beauty. The overall atmosphere is serene and peaceful, evoking a sense of tranquility and wanderlust. The scene is bathed in a soft, bright light, enhancing the natural colors and creating a picturesque view.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along the winding road, its view slowly descending as it reveals rolling green hills and towering snow-capped mountains. The bright light bathes the scene, creating a peaceful, cinematic journey through a breathtaking natural landscape.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along the road, maintaining a consistent horizontal position. It glides smoothly through the landscape, with a slight downward tilt as it progresses, capturing the winding path and distant mountains in a steady, unbroken motion.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/UnzIN-d3RVg_111/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/UnzIN-d3RVg_111/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/UnzIN-d3RVg_111/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Mountain Valley)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 14,
      title: 'VukLV0AoeFA_136',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A towering mountain range stretches beneath a brooding sky, its jagged peaks shrouded in swirling clouds, evoking a sense of quiet majesty and natural grandeur.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene showcases a dramatic mountain landscape with jagged peaks and steep cliffs. A thick layer of clouds fills the valleys below, creating a sense of depth and mystery. The rocky terrain is sparsely covered with patches of green vegetation. The lighting is soft and diffused, suggesting an overcast day. The overall tone is awe-inspiring and serene, emphasizing the grandeur and scale of nature. The scene evokes a feeling of tranquility and invites contemplation.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera surges forward through the air, descending along the rocky ridge as mist curls below. A gentle shift to the right reveals the sheer drop of the valley, the soft light casting long shadows across the barren slopes, capturing the raw beauty of the untamed landscape.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides forward and downward, tracing a dynamic path along the mountain ridge. It shifts slightly right as it descends, revealing the steep drop below. The motion is smooth and continuous, with a steady acceleration that emphasizes the vastness of the landscape.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/VukLV0AoeFA_136/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/VukLV0AoeFA_136/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/VukLV0AoeFA_136/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Mountain Range)',
        'Dim/Dark',
        'Cloudy'
      ]
    },
    {
      id: 15,
      title: 'WL5wNC3vEXc_189',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene countryside scene features a dirt path winding through a green meadow, bordered by trees and wooden huts, with a distant lake and town under a clear blue sky.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A picturesque landscape unfolds, featuring a dirt path winding uphill through a vibrant green meadow. Lush trees line the left side of the path, casting shadows. Small wooden huts dot the hillside, adding to the idyllic scene. In the distance, a serene lake is nestled among rolling hills, with a town visible along its shore. The sky is a clear blue, typical of daytime, and fluffy white clouds drift lazily. The overall atmosphere is peaceful and inviting, evoking a sense of tranquility.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along a windiang dirt path, revealing lush greenery and towering trees on one side. As it gently shifts right, wooden huts and rolling hills come into view, all bathed in the bright light of day, creating a peaceful and immersive journey through the countryside.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a winding path, with a subtle shift to the right as it ascends. The trajectory shows a consistent forward translate, with minimal lateral or vertical adjustments, maintaining a smooth and steady motion.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/WL5wNC3vEXc_189/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/WL5wNC3vEXc_189/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/WL5wNC3vEXc_189/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Meadow Path)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 16,
      title: 'XqjZKkWlzsU_323',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A tranquil lakeside pier lined with flowers stretches toward snow-capped mountains, framed by a soft, partly cloudy sky and a group of leisurely visitors.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene is set on a pier extending into a serene lake, bordered by majestic mountains in the background. Several people gather near the entrance of the pier, some taking pictures with selfie sticks. The pier itself is adorned with numerous flower-filled planters along its railings. The lake is calm and reflective, and the mountains add a sense of grandeur to the scenery. The atmosphere is tranquil, evoking a feeling of peaceful enjoyment of nature. The sky is partly cloudy, casting a soft light over the entire landscape.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along the wooden pier, passing blooming planters and a warning sign, as the calm lake reflects the towering mountains in the distance. The gentle motion carries the viewer toward the water’s edge, where the peaceful atmosphere lingers in the air.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily translates forward along the pier, gliding smoothly past flower-adorned railings and a safety gate. It maintains a consistent direction, gradually slowing as it approaches the lake’s edge, with a subtle shift in elevation as it nears the end of the structure.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/XqjZKkWlzsU_323/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/XqjZKkWlzsU_323/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/XqjZKkWlzsU_323/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Waterfront (Pier)',
        'Bright',
        'Daytime',
        'Cloudy',
        'Sparse'
      ]
    },
    {
      id: 17,
      title: 'Xy4d3Siuy3s_6',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A sleek, modern home office bathed in natural light features a wooden desk, built-in shelves, and a large abstract painting, exuding calm sophistication and functional elegance.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a modern home office. A brown-toned wooden desk with a laptop and books sits in the center, illuminated by natural light from a large window to the left. Behind the desk, built-in shelving units flank a large abstract painting. The shelves are decorated with books, plants, and decorative objects. To the right, a large television displays an image of horses. The room is painted in neutral tones, creating a calm and sophisticated atmosphere. The overall impression is one of a stylish and functional workspace.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera flows effortlessly across the room, revealing a tidy workspace filled with books, plants, and a vibrant painting. As it moves toward the window, sunlight spills across the desk, highlighting the room’s minimalist design and serene ambiance.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, moving past the desk and toward the window, then continues with a steady rightward translate, capturing the shelving and artwork in focus. The motion is consistent and fluid, with no significant pauses or abrupt changes.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/Xy4d3Siuy3s_6/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/Xy4d3Siuy3s_6/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/Xy4d3Siuy3s_6/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Home Office)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 18,
      title: 'gmHqhYVqyxM_183',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A narrow, historic European alleyway lined with stone buildings, flower pots, and a soft, inviting light, evoking a peaceful, timeless atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a charming, narrow alleyway in an old European town. The alley is lined with stone buildings, adorned with vibrant purple flower pots hanging on the walls and placed on the steps. The path ascends gently, leading under a stone archway that frames a glimpse of brighter light at the far end. The lighting is soft and diffused, creating a tranquil and inviting atmosphere. The overall tone is peaceful and picturesque, evoking a sense of history and quaint beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera drifts forward through a quiet, cobbled alley, flanked by weathered stone walls and blooming purple flowers. A low archway looms ahead, casting a warm glow that hints at a hidden world beyond, as the path gently curves to the left, drawing the viewer deeper into the scene's serene charm.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides steadily forward, moving smoothly along a winding path. As it progresses, it shifts slightly to the left, maintaining a consistent direction. The motion remains smooth and unbroken, with no abrupt changes in speed or orientation.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/gmHqhYVqyxM_183/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/gmHqhYVqyxM_183/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/gmHqhYVqyxM_183/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Narrow Alleyway)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 19,
      title: 'hO9bi5_FrPw_185',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A rainy night in Seoul features glistening streets, neon reflections, and bustling yet calm pedestrian activity amid a blend of traditional and modern architecture.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A rainy night in Seoul, South Korea, is depicted with glistening streets reflecting neon lights. Pedestrians with umbrellas walk along the sidewalk. The storefronts are brightly lit, displaying clothing and currency exchange services. The atmosphere is calm and subdued, with the rain creating a reflective surface on the pavement. The scene conveys a sense of urban life continuing despite the weather, with a mix of traditional and modern elements in the architecture and signage.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera smoothly drifts right along a rain-slicked street, its path illuminated by glowing neon signs. Pedestrians with umbrellas move past brightly lit shops, their reflections shimmering on the wet pavement as the scene pulses with quiet urban energy.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides steadily to the right, moving through a wet urban landscape at night. It maintains a consistent pace, revealing storefronts and pedestrians under umbrellas, before gradually coming to a halt.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/hO9bi5_FrPw_185/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/hO9bi5_FrPw_185/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/hO9bi5_FrPw_185/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Street Scene)',
        'Bright',
        'Night',
        'Rainy',
        'Sparse'
      ]
    },
    {
      id: 20,
      title: 'i_bChYr7fOg_218',
      category: 'rural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A peaceful Swiss village street with wooden buildings, a hotel, and a cascading waterfall, set under bright sunlight and fluttering flags, evoking a serene alpine atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a quaint street in a Swiss village, likely in the Alps, with traditional wooden buildings and a hotel. A waterfall cascades down a cliff face in the background, adding to the picturesque setting. A white SUV is parked near the hotel entrance. People stroll along the sidewalk, suggesting a relaxed, touristy atmosphere. The lighting is bright, indicating a sunny day, and the overall tone is peaceful and inviting. Flags flutter in the breeze, adding a touch of local color.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward down a charming Alpine street, passing a parked SUV and revealing a backdrop of lush greenery and a roaring waterfall. A gentle leftward shift frames the traditional buildings and bustling sidewalk, capturing the tranquil, picturesque essence of the village.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along the street, with a slight leftward drift as it progresses. The motion is smooth and consistent, maintaining a stable perspective on the village scene. The forward translate dominates, with minimal lateral adjustment.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/i_bChYr7fOg_218/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/i_bChYr7fOg_218/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/i_bChYr7fOg_218/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Rural (Village Street)',
        'Bright',
        'Daytime',
        'Sunny',
        'Moderate'
      ]
    },
    {
      id: 21,
      title: 'lCQK_Kyiw-Q_138',
      category: 'rural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A peaceful village street is framed by traditional architecture, surrounded by towering mountains under an overcast sky, with people strolling and shopping in a charming, tourist-friendly atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a quaint village street lined with traditional buildings, set against a backdrop of towering mountains. People stroll along the sidewalks, browsing in shops and enjoying the scenery. The sky is overcast, casting a soft, diffused light over the scene. The overall atmosphere is peaceful and inviting, evoking a sense of charm and tranquility. The village appears to be a popular tourist destination, with a mix of locals and visitors exploring the area.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along a quiet village road, capturing the warm, weathered facades of shops and homes. Pedestrians pass by, their silhouettes softened by the diffused light, as the distant mountains loom silently behind, reinforcing the serene, timeless charm of the scene.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a paved village street, gliding smoothly past traditional buildings and bustling pedestrians. Its path remains consistent, with no lateral or vertical shifts, maintaining a stable, forward-facing perspective through the tranquil setting.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/lCQK_Kyiw-Q_138/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/lCQK_Kyiw-Q_138/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/lCQK_Kyiw-Q_138/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Rural (Village Street)',
        'Dim/Dark',
        'Daytime',
        'Cloudy',
        'Moderate'
      ]
    },
    {
      id: 22,
      title: 'lLFWNT9q9kQ_65',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene canyon with a rushing river, lush greenery, and a winding path carved into the rock face, bathed in soft, natural light.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A vibrant, lush canyon scene unfolds, featuring a rushing river cascading over rocks on the left. A narrow, paved path runs along the right side, carved into the rock face, with a metal railing separating it from the steep drop to the river. Dense green foliage covers the canyon walls and trees reach towards the sky, creating a sense of depth and enclosure. The lighting is somewhat muted, casting soft shadows and enhancing the natural colors. The overall tone is serene and peaceful, inviting viewers to immerse themselves in the beauty of the natural environment.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along a narrow, rocky path, framed by towering walls and a rushing river to the left. As it moves, the path curves gently to the right, revealing dense foliage and a sense of quiet majesty in the natural world.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a narrow path, with a gradual rightward shift. The motion is smooth and consistent, maintaining a steady pace as it progresses through the rocky terrain.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/lLFWNT9q9kQ_65/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/lLFWNT9q9kQ_65/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/lLFWNT9q9kQ_65/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Canyon)',
        'Dim/Dark',
        'Deserted'
      ]
    },
    {
      id: 23,
      title: 'lU6o1vHDZ9U_409',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A tranquil winter bamboo forest bathed in soft light, with a narrow snowy path leading toward a solitary figure, evoking quiet contemplation and natural serenity.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A serene winter scene unfolds within a dense bamboo forest, the tall stalks dusted with snow. A narrow path, also covered in snow, cuts through the forest, creating a tunnel-like effect. A lone figure walks along the path, appearing small against the towering bamboo. The lighting is soft and diffused, typical of an overcast day, casting a muted, ethereal glow on the landscape. The overall atmosphere is tranquil and contemplative, evoking a sense of solitude and peace within the snowy bamboo grove.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward through a hushed bamboo forest, its path illuminated by soft, diffused light. Snow clings to the towering stalks as the frame slowly shifts left, revealing the vast, silent expanse and a lone figure walking ahead, lost in the stillness of the winter world.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a snow-covered path, gliding smoothly through the bamboo forest. It maintains a low angle, tracking the distant figure with consistent motion. The trajectory shows a gradual shift to the left, subtly repositioning the frame as it progresses deeper into the scene.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/lU6o1vHDZ9U_409/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/lU6o1vHDZ9U_409/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/lU6o1vHDZ9U_409/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Snowy Bamboo Forest)',
        'Dim/Dark',
        'Snowy',
        'Deserted'
      ]
    },
    {
      id: 24,
      title: 'o6h1Iz_T4QQ_57',
      category: 'rural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A tranquil winter scene in a mountain valley showcases a snow-covered road leading to a quaint village, with a rustic wooden barn standing out against the backdrop of snow-laden mountains.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A picturesque winter scene unfolds in a mountain valley. A narrow, snow-lined road winds through the landscape, leading towards a quaint village of houses nestled among the trees. The sun shines brightly, casting a warm glow on the snow-covered mountains in the background. To the right of the road, a rustic wooden barn stands prominently on a snow-covered slope. The atmosphere is serene and peaceful, evoking a sense of tranquility and natural beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: As the camera glides forward along a snow-covered road, the serene landscape of a mountain valley unfolds, revealing a quaint village nestled among the trees. The camera's gentle shift to the right uncovers a rustic wooden barn, bathed in the warm glow of sunlight reflecting off the snow. The tranquil atmosphere envelops the viewer, capturing the essence of a peaceful winter day.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: Starting from a stationary position, the camera translates steadily forward, gradually shifting its gaze to the right. This rightward translation slows as the camera approaches a wooden barn, eventually coming to a halt with a focused view on the barn.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/o6h1Iz_T4QQ_57/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/o6h1Iz_T4QQ_57/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/o6h1Iz_T4QQ_57/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Rural (Mountain Valley)',
        'Bright',
        'Daytime',
        'Snowy',
        'Deserted'
      ]
    },
    {
      id: 25,
      title: 'oEds4e1xEys_258',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A sleek, modern lounge features plush seating, greenery, and a serene seascape display, set in a high-end, contemporary environment with warm lighting and a calm, inviting atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a stylish, modern lounge area, possibly in a cinema or entertainment complex. The space features comfortable seating arrangements, including blue and orange couches, interspersed with small tables and lush greenery. A large screen displays a serene seascape with a sailboat. People are seen walking through the area, some wearing masks. The lighting is a mix of natural and artificial, creating a warm, relaxed atmosphere. The overall tone is sophisticated and inviting, suggesting a high-end, contemporary environment.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward through the elegant lounge, revealing plush blue and orange couches, lush greenery, and a tranquil seascape on a large screen. A gentle shift to the left uncovers more of the space, capturing the refined, relaxed ambiance of the high-end setting.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward through the space, with a smooth, continuous translation. A slight shift to the left is detected mid-trajectory, revealing more of the lounge area. The motion remains consistent and controlled, with no abrupt changes in direction or speed.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/oEds4e1xEys_258/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/oEds4e1xEys_258/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/oEds4e1xEys_258/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Lounge Area)',
        'Bright',
        'Daytime',
        'Moderate'
      ]
    },
    {
      id: 26,
      title: 't10WpeKJ6OI_52',
      category: 'rural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A peaceful Swiss village lies beneath a vibrant blue sky, surrounded by towering snow-covered mountains and lush green fields, evoking calm and natural beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: A quaint village nestled in the Swiss Alps is bathed in natural light. A small wooden structure sits near a path, leading towards a lush green field. In the background, towering mountains rise majestically, partially covered in snow. The sky is a mix of blue and white, creating a peaceful atmosphere. People are visible in the distance, enjoying the serene landscape. The scene evokes a sense of tranquility and wonder.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera moves steadily right and forward, unveiling a quiet Swiss village bathed in natural light. Wooden structures sit beside a winding path, leading toward rolling green hills and majestic snow-draped peaks under a bright sky, capturing a moment of tranquil majesty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, maintaining a steady forward motion as it reveals a serene alpine village. Its path is consistent, with no abrupt changes in speed, gradually uncovering the landscape and distant snow-capped peaks.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/t10WpeKJ6OI_52/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/t10WpeKJ6OI_52/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/t10WpeKJ6OI_52/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Rural (Alpine Village)',
        'Bright',
        'Daytime',
        'Sunny',
        'Sparse'
      ]
    },
    {
      id: 27,
      title: 'tCqeAUFRc_k_6',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A sleek, modern home office bathed in natural light features a wooden desk, built-in shelves, and a large abstract painting, exuding calm sophistication and functional elegance.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a modern home office. A brown-toned wooden desk with a laptop and books sits in the center, illuminated by natural light from a large window to the left. Behind the desk, built-in shelving units flank a large abstract painting. The shelves are decorated with books, plants, and decorative objects. To the right, a large television displays an image of horses. The room is painted in neutral tones, creating a calm and sophisticated atmosphere. The overall impression is one of a stylish and functional workspace.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera flows effortlessly across the room, revealing a tidy workspace filled with books, plants, and a vibrant painting. As it moves toward the window, sunlight spills across the desk, highlighting the room’s minimalist design and serene ambiance.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera glides smoothly to the right, moving past the desk and toward the window, then continues with a steady rightward translate, capturing the shelving and artwork in focus. The motion is consistent and fluid, with no significant pauses or abrupt changes.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/tCqeAUFRc_k_6/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/tCqeAUFRc_k_6/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/tCqeAUFRc_k_6/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Home Office)',
        'Bright',
        'Daytime',
        'Sunny',
        'Deserted'
      ]
    },
    {
      id: 28,
      title: 'tZ-FNKHH5hk_31',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A lively pedestrian street lined with shops and cafes, framed by cobblestone paths and a mountainous backdrop, bathed in warm late-afternoon light that enhances its inviting, urban charm.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a bustling pedestrian street lined with shops and cafes. People stroll along the cobblestone pavement, some browsing in store windows, others seated at outdoor tables enjoying refreshments. Bicycles are parked along the side, adding to the urban atmosphere. In the background, mountains rise, providing a scenic backdrop. The lighting suggests late afternoon or early evening, with a warm, slightly muted tone. The overall mood is relaxed and inviting, capturing the essence of a vibrant city center.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward down a bustling street, its path gently shifting left to frame the vibrant scene of shops and outdoor seating. The warm glow of dusk casts long shadows over the cobblestones, capturing the relaxed energy of a city alive with life.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along the street, with a subtle leftward shift in framing. The motion is smooth and consistent, maintaining a steady pace as it passes shops and cafes, gradually building momentum before coming to a stop.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/tZ-FNKHH5hk_31/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/tZ-FNKHH5hk_31/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/tZ-FNKHH5hk_31/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Street Scene)',
        'Bright',
        'Dusk/Evening',
        'Sunny',
        'Crowded'
      ]
    },
    {
      id: 29,
      title: 'ugOqZOJvPuc_2',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A volcanic landscape features a glowing orange lava river flowing through dark rock under a blue-hazed sky, surrounded by towering mountains and drifting fog, evoking awe and mystery.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a volcanic landscape dominated by a river of vibrant orange lava flowing through dark, rocky terrain. Mountains rise in the background under a hazy, blue sky. Wisps of smoke or fog drift across the landscape, adding to the dramatic atmosphere. The orange lava contrasts sharply with the dark earth, creating a striking visual effect. The overall tone is one of awe and wonder, highlighting the raw power and beauty of nature. The scene evokes a sense of both danger and fascination.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward through the terrain, its path gently shifting right as it descends, revealing the luminous orange river of lava winding through jagged rocks beneath a smoky, blue-tinged sky, painting a scene of raw natural power and eerie beauty.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward, with a subtle rightward drift, while gradually descending. The motion is smooth and consistent, capturing the vast volcanic expanse as it reveals more of the glowing orange lava river and rugged terrain below.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/ugOqZOJvPuc_2/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/ugOqZOJvPuc_2/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/ugOqZOJvPuc_2/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Volcanic Terrain)',
        'Bright',
        'Daytime',
        'Foggy',
        'Deserted'
      ]
    },
    {
      id: 30,
      title: 'xwTdumXhyEM_171',
      category: 'waterfront',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene evening scene of the Han River in Seoul, framed by glowing bridges, lush greenery, and a cityscape under dark, overcast skies.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts an evening view of the Han River in Seoul, South Korea. Two bridges illuminated with yellow and green lights span the river, their reflections shimmering in the water. The sky is overcast with dark clouds. Lush green vegetation lines the riverbank in the foreground. In the background, city lights twinkle, creating a vibrant urban backdrop. The overall atmosphere is serene and peaceful, showcasing the beauty of the city at dusk.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along the quiet riverbank, its low angle highlighting the shimmering reflections of yellow and green lights on the water. As it subtly pans left and right, the towering bridges and distant city lights come into view, painting a peaceful, luminous portrait of Seoul at dusk.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along the riverbank, maintaining a low angle as it captures the shimmering reflections of the illuminated bridges. Slight right and left panning motions keep the structures in frame, with smooth, continuous motion throughout.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/xwTdumXhyEM_171/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/xwTdumXhyEM_171/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/xwTdumXhyEM_171/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Waterfront (River View)',
        'Dim/Dark',
        'Dusk/Evening',
        'Cloudy'
      ]
    },
    {
      id: 31,
      title: 'yi_SDDfnaTs_140',
      category: 'interior',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A sleek, modern walk-in closet with dark wood shelving, integrated lighting, and a skylight, showcasing an organized, upscale environment with a man walking toward the camera.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a long, luxurious walk-in closet with dark wood shelving and drawers lining both sides. A man in a suit walks towards the camera from the far end of the closet. The closet is well-lit with integrated lighting in the shelves and a skylight providing natural light. Clothes hang neatly on racks, and folded items are stacked on shelves. The overall atmosphere is modern and upscale, conveying a sense of organization and opulence. The cool lighting creates a calm and sophisticated mood.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward through the polished, well-lit closet, capturing the elegant arrangement of clothes and shelves. The low-angle shot emphasizes the space's sophistication, as a man walks toward the lens, framed by the orderly display of garments and natural light filtering from above.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily translates forward, gliding along the central path of the closet. Its movement is smooth and consistent, maintaining a low angle as it progresses through the space, revealing the organized shelves and clothing racks in steady progression.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/yi_SDDfnaTs_140/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/yi_SDDfnaTs_140/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/yi_SDDfnaTs_140/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Interior (Walk-in Closet)',
        'Bright',
        'Daytime',
        'Deserted'
      ]
    },
    {
      id: 32,
      title: 'ysLl37C6Q10_246',
      category: 'natural',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene winter mountain landscape features a paved road winding through snow-covered terrain, framed by steep cliffs and a golden-hued sky, evoking tranquility and grandeur.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a winter landscape in a mountainous region. A paved road cuts through the snow-covered terrain, flanked by steep mountain faces and a building on the right. The sky is a warm, golden hue, suggesting either sunrise or sunset. A car drives along the road, adding a dynamic element to the otherwise still environment. The overall tone is serene and majestic, highlighting the beauty of the natural landscape despite the cold, snowy conditions. The scene evokes a sense of tranquility and awe.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward along a quiet, snow-dusted road, its low angle capturing the towering mountains and the warm glow of the sky. As it moves, a gentle shift to the right reveals more of the vast, frozen expanse, emphasizing the stillness and majesty of the scene.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a snowy road, with a slight rightward drift as it progresses. The motion is smooth and consistent, maintaining a low angle that emphasizes the vast mountainous landscape ahead.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/ysLl37C6Q10_246/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/ysLl37C6Q10_246/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/ysLl37C6Q10_246/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Natural Landscape (Mountainous Winter Scene)',
        'Bright',
        'Dusk',
        'Snowy',
        'Deserted'
      ]
    },
    {
      id: 33,
      title: 'zUzLSpMOX58_202',
      category: 'urban',
      description: (
        <div style={{lineHeight: '1.4', textAlign: 'left'}}>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: A serene, covered Japanese market street is bathed in soft light, lined with closed shops and hanging lanterns, evoking a calm, traditional atmosphere.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: The scene depicts a quiet, covered market street in Japan. Red lanterns hang overhead, adding a touch of color to the otherwise muted tones. Most of the shops are closed, their metal shutters pulled down. A bicycle is parked to the left. The street is clean and orderly, with tiled flooring. In the distance, a person stands near the end of the market street, bathed in the bright light of the open end. The atmosphere is calm and peaceful, suggesting a slow pace of life.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: The camera glides forward down the center of a quiet, covered market street, its path subtly shifting left as it reveals rows of shuttered shops and red lanterns overhead. The stillness of the scene contrasts with the smooth, deliberate motion, capturing the peaceful rhythm of daily life.</div>
          <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Motion</strong>: The camera steadily moves forward along a straight path, gliding smoothly through the quiet market street. Its position shifts consistently to the left as it progresses, maintaining a steady pace with no abrupt changes in direction or speed.</div>
        </div>
      ),
      videos: [
        { src: '/SpatialVID/samples/zUzLSpMOX58_202/clip.mp4', title: 'Video Clip' },
        { src: '/SpatialVID/samples/zUzLSpMOX58_202/depth_video.mp4', title: 'Depth' },
        { src: '/SpatialVID/samples/zUzLSpMOX58_202/pose_video.mp4', title: 'Camera Pose' }
      ],
      tech: [
        'Urban (Covered Market Street)',
        'Bright',
        'Daytime',
        'Sunny',
        'Sparse'
      ]
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
                style={{
                  filter: 'brightness(1) contrast(1.1) saturate(1.05)',
                  imageRendering: 'crisp-edges',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }}
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
                            style={{
                              filter: 'brightness(1) contrast(1.1) saturate(1.05)',
                              imageRendering: 'crisp-edges',
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(0)',
                              willChange: 'transform'
                            }}
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
                            style={{
                              filter: 'brightness(1) contrast(1.1) saturate(1.05)',
                              imageRendering: 'crisp-edges',
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(0)',
                              willChange: 'transform'
                            }}
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
                            style={{
                              filter: 'brightness(1) contrast(1.1) saturate(1.05)',
                              imageRendering: 'crisp-edges',
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(0)',
                              willChange: 'transform'
                            }}
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
                  className="p-6 bg-white flex flex-col border-t border-gray-200"
                  animate={{
                    height: isDescriptionExpanded ? '75%' : '40%'
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ 
                    height: isDescriptionExpanded ? '75%' : '40%',
                    zIndex: 10,
                    backgroundColor: '#ffffff'
                  }}
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
                        // 只显示当前sample的Shot Immersion内容
                        typeof selectedImage.description === 'string' ? (
                          <div className="text-gray-700 text-base md:text-sm lg:text-md xl:text-base 2xl:text-xl leading-relaxed">
                            {selectedImage.description.split('。')[0] + '。'}
                          </div>
                        ) : (
                          <div style={{lineHeight: '1.4', textAlign: 'justify'}}>
                            {/* 直接获取当前sample的description中的第三个div（Shot Immersion部分） */}
                            {(() => {
                              const descriptionElement = selectedImage.description;
                              if (descriptionElement && descriptionElement.props && descriptionElement.props.children && descriptionElement.props.children[2]) {
                                return descriptionElement.props.children[2];
                              }
                              return (
                                <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Shot Immersion</strong>: Content not available.</div>
                              );
                            })()} 
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