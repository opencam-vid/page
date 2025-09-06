import { motion } from 'framer-motion'

const Footer = () => {
  // const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* 组织标识 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              NJU 3DV
            </h3>
          </motion.div>
          
          {/* 座右铭 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg 2xl:text-xl font-medium italic">
              "Exploring the Future of 3D Vision"
            </p>
          </motion.div>
          
          {/* 数据许可声明 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm 2xl:text-base leading-relaxed max-w-[55vw]">
              SpatialVID is released under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC-BY-NC-SA-4.0). Users must attribute the original source, use the resource only for non-commercial purposes, and release any modified/derived works under the same license.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer