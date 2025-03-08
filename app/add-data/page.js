"use client";

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

        <div className="rounded-full border-cyan-500 h-24 w-24 flex justify-center items-center border-2 border-dotted">

          <div className="rounded-full border-cyan h-16 w-16 flex justify-center items-center border-2 border-dashed">

           
            <div className="rounded-full border-white h-12 w-12 flex justify-center items-center border-2">

              <button
              className="rounded-full border-2 border-cyan-400 h-6 w-6 bg-cyan-400"
                onClick={addProduct}>
              </button>

            </div>

          </div>

        </div>
          
        </div>
      </div>
  );
};

export default Page;