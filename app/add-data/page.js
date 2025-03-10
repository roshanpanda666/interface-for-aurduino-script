"use client";
import { motion } from "framer-motion";
const Page = () => {

  const addProduct = async () => {

    let response = await fetch("/api/dataa", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        button: "test",
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("Product added successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      alert("Failed to add data");
    }
  };

  return (
    <div>


      {/* Search bar with dropdown */}

      {/* Add product form */}
        <div className="flex justify-center items-center h-screen">

        <motion.div className="rounded-full border-cyan-500 h-44 w-44 flex justify-center items-center border-2 border-dotted"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: "linear" }}
        >

          <motion.div className="rounded-full border-cyan h-36 w-36 flex justify-center items-center border-2 border-dashed"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 3, ease: "easeIn" }}
          
          >

           
            <div className="rounded-full border-white h-32 w-32 flex justify-center items-center border-2">

              <button
              className="rounded-full border-2 border-cyan-400 h-20 w-20 bg-cyan-400 hover:h-12 hover:w-12"
                onClick={addProduct}>
              </button>

            </div>

          </motion.div>

        </motion.div>
          
        </div>
      </div>
  );
};

export default Page;