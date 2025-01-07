import "./modal.css";

import React, { useState, useEffect } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // Use useEffect to add/remove the 'active-modal' class from the body
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    // Clean up when the component unmounts or modal changes
    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [modal]); // Only run this effect when 'modal' state changes

  return (
    <div className="container">
      <button onClick={toggleModal} className="btn-modal">
        Open Modal
      </button>

      {modal && (
        <>
          <div onClick={toggleModal} className="overlay"></div>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the modal
          >
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam
        excepturi corrupti doloremque accusantium id ratione ipsa veniam eum
        magnam soluta molestias accusamus, maiores tenetur quae temporibus
        aperiam, sint expedita illum, libero error deserunt maxime omnis vero.
        Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam
        fuga nihil maxime ducimus dolorem magnam in quae cum animi
        exercitationem et velit? Est vitae repellat, ratione, necessitatibus
        facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid
        rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod
        quasi minus quae exercitationem earum pariatur iste, quisquam dolores
        magnam possimus sapiente excepturi nihil quibusdam, labore eius nam.
      </p>
    </div>
  );
}
