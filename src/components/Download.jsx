import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const Download = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView && cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        }
      )
    }
  }, [inView])

  const datasets = [
    {
      name: 'SpatialVID',
      description: '10.5M samples / 37.0 khrs duration / ~8.0 TB',
      downloadUrl: 'https://huggingface.co/datasets/SpatialVID/SpatialVID'
    },
    {
      name: 'SpatialVID-HQ',
      description: '10.5M samples / 37.0 khrs duration / ~8.0 TB',
      downloadUrl: 'https://huggingface.co/datasets/SpatialVID/SpatialVID-HQ'
    },
    {
      name: 'SpatialVID-Raw',
      description: '10.5M samples / 37.0 khrs duration / ~8.0 TB',
      downloadUrl: '#'
    }
  ]

  const handleDownload = (url, name) => {
    if (url === '#') {
      // 当链接为#时，显示提示信息
      alert(`${name} is coming soon, stay tuned!`)
    } else {
      // 当链接不为#时，跳转到原链接
      window.open(url, '_blank')
    }
  }

  return (
    <section id="download" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center mb-6">
            <span className="gradient-text">Download</span>
          </h2>
          <p className="text-2xl 2xl:text-3xl text-gray-500 max-w-[70vw] mx-auto mb-4">
            Choose the dataset version that suits your research needs
          </p>
        </motion.div>
        
        {/* 数据集卡片网格 - 每个卡片占满宽度，描述从40%处开始 */}
        <div ref={cardsRef} className="max-w-[70vw] mx-auto space-y-6">
          {datasets.map((dataset, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 border border-grey-200 hover:shadow-md transition-all duration-100 w-full relative"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              {/* 卡片内容容器 - 纵向居中 */}
               <div className="flex items-center h-full min-h-[120px]">
                 {/* 下载按钮 - 左侧 */}
                 <motion.button
                   onClick={() => handleDownload(dataset.downloadUrl, dataset.name)}
                   className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ml-6"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </motion.button>
                 
                 {/* 数据集名称 - 10%到40%之间 */}
                 <div className="flex-shrink-0 w-[30%] ml-[4%]">
                   <h3 className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-gray-800 text-center">
                     {dataset.name}
                   </h3>
                 </div>
                 
                 {/* 数据集描述 - 从40%处开始 */}
                 <div className="flex-1 ml-6 pr-6">
                   <p className="text-gray-600 text-sm md:text-base lg:text-lg 2xl:text-xl leading-relaxed text-left">
                     {dataset.description}
                   </p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Download