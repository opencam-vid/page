import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [galleryItems, setGalleryItems] = useState([])
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
  }, [inView, selectedCategory])

  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'urban', name: 'Urban' },
    { id: 'natural', name: 'Natural' },
    { id: 'rural', name: 'Rural' },
    { id: 'interior', name: 'Interior' },
    { id: 'waterfront', name: 'Waterfront' },
  ]

    // 动态加载JSON数据
  useEffect(() => {
    const loadGalleryData = async () => {
      const sampleTitles = [
        '-hGQfHfuyd8_151', '05npYIgBnqo_3', '4puCK-UZ-nI_26', '8Qp19S1m5Ns_337',
        'B1hUyHTeSn4_2', 'C94J0Ye8_20_199', 'CfZQjFsSsg4_1030', 'EzqNtmkSEq4_454',
        'FC0_lWwt4M0_200', 'IvK1WHREGxs_171', 'NMl_K1H1FwE_18', 'QWbmiMWc4TY_8',
        'UnzIN-d3RVg_111', 'VukLV0AoeFA_136', 'WL5wNC3vEXc_189', 'XqjZKkWlzsU_323',
        'Xy4d3Siuy3s_6', 'gmHqhYVqyxM_183', 'hO9bi5_FrPw_185', 'i_bChYr7fOg_218',
        'lCQK_Kyiw-Q_138', 'lLFWNT9q9kQ_65', 'lU6o1vHDZ9U_409', 'o6h1Iz_T4QQ_57',
        'oEds4e1xEys_258', 't10WpeKJ6OI_52', 'tCqeAUFRc_k_6', 'tZ-FNKHH5hk_31',
        'ugOqZOJvPuc_2', 'Xy4d3Siuy3s_6', 'xwTdumXhyEM_171', 'yi_SDDfnaTs_140', 
        'ysLl37C6Q10_245', 'ysLl37C6Q10_246', 'zUzLSpMOX58_202'
      ]
      
      const items = []
      
      for (let i = 0; i < sampleTitles.length; i++) {
        const title = sampleTitles[i]
        try {
          const response = await fetch(`/SpatialVID/samples/${title}/${title}.json`)
          if (response.ok) {
            const data = await response.json()
            
            // 获取CategoryTag中的sceneType作为category
            let category = 'natural' // 默认值
            if (data.CategoryTag && data.CategoryTag.sceneType) {
              const sceneType = data.CategoryTag.sceneType.first.toLowerCase()
              if (sceneType.includes('interior')) category = 'interior'
              else if (sceneType.includes('urban')) category = 'urban'
              else if (sceneType.includes('waterfront')) category = 'waterfront'
              else if (sceneType.includes('rural')) category = 'rural'
              else category = 'natural'
            }
            
            // 构建description
            const description = (
              <div style={{lineHeight: '1.4', textAlign: 'left'}}>
                {data.SceneSummary && data.SceneSummary !== 'unknown' && (
                  <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #0071e3', fontWeight: 'bold'}}>Scene Abstract</strong>: {data.SceneSummary}</div>
                )}
                {data.SceneDesc && data.SceneDesc !== 'unknown' && (
                  <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #ff6b35', fontWeight: 'bold'}}>Scene Description</strong>: {data.SceneDesc}</div>
                )}
                {data.ShotImmersion && data.ShotImmersion !== 'unknown' && (
                  <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #00bf63', fontWeight: 'bold'}}>Immersive Shot Summary</strong>: {data.ShotImmersion}</div>
                )}
                {data.OptCamMotion && data.OptCamMotion !== 'unknown' && (
                  <div style={{marginBottom: '8px', paddingLeft: '16px', textIndent: '-16px'}}>• <strong style={{color: ' #6f42c1', fontWeight: 'bold'}}>Camera Description</strong>: {data.OptCamMotion}</div>
                )}
              </div>
            )
            
            // 构建tech数组
            const tech = []
            if (data.CategoryTag) {
              if (data.CategoryTag.sceneType) {
                tech.push(data.CategoryTag.sceneType.first + ' (' +data.CategoryTag.sceneType.second + ')')
              }
              if (data.CategoryTag.lighting && data.CategoryTag.lighting.toLowerCase() !== 'unknown') {
                tech.push(data.CategoryTag.lighting)
              }
              if (data.CategoryTag.timeOfDay && data.CategoryTag.timeOfDay.toLowerCase() !== 'unknown') {
                if (data.CategoryTag.timeOfDay.includes('Daytime')) 
                  tech.push('Daytime')
                else
                  tech.push(data.CategoryTag.timeOfDay)
              }
              if (data.CategoryTag.weather && data.CategoryTag.weather.toLowerCase() !== 'unknown') {
                tech.push(data.CategoryTag.weather)
              }
              if (data.CategoryTag.crowdDensity && data.CategoryTag.crowdDensity.toLowerCase() !== 'unknown') {
                tech.push(data.CategoryTag.crowdDensity)
              }
            }
            
            items.push({
              id: i + 1,
              title,
              category,
              description,
              videos: [
                { src: `/SpatialVID/samples/${title}/clip.mp4`, title: 'Video Clip' },
                { src: `/SpatialVID/samples/${title}/depth_video.mp4`, title: 'Depth' },
                { src: `/SpatialVID/samples/${title}/pose_video.mp4`, title: 'Camera Pose' }
              ],
              tech
            })
          }
        } catch (error) {
          console.error(`Error loading data for ${title}:`, error)
        }
      }
      
      setGalleryItems(items)
    }
    
    loadGalleryData()
  }, [])


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
          animate={{ opacity: 1 }}
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
                          Brief Captions
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          Structured Captions
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