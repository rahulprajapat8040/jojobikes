"use client";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const WhyJojoBike = ({ data }) => {
  return (
    <>
      <section className="flex justify-center  bg-gray-900 py-4">
        <div className="max-w-6xl px-2 py-3">
          <h1 className="text-center text-primaryColor py-2 font-semibold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
            WHYJOJO RENTAL BIKE & SCOOTY
          </h1>
          <div>
            <div className="grid mt-4 grid-cols-1 max-w-full md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, index) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true });
                return (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 , borderRadius: 0 }}
                    animate={inView ? { opacity: 1, y: 0 , borderRadius: 10} : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scaleX: 1.05 , scaleY: 1.03, borderRadius: 30}}
                    key={item.id}
                    className="flex flex-col items-center justify-center p-4 py-8 bg-white rounded- shadow-lg"
                  >
                    <div className="text-primaryColor">{item.icons}</div>
                    <h1 className="text-2xl py-2 text-center  font-bold text-primaryColor">
                      {item.title}
                    </h1>
                    <p className="text-center text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyJojoBike;
