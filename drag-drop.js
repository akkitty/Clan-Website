const draggables = document.querySelectorAll("img[draggable='true']");
const slots = document.querySelectorAll(".slot");
const successMessage = document.getElementById("success-message");

draggables.forEach(img => {
    img.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text", event.target.id);
    });
});

slots.forEach(slot => {
    slot.addEventListener("dragover", event => {
        event.preventDefault();
    });

    slot.addEventListener("drop", event => {
        event.preventDefault();

        const draggedId = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(draggedId);

        // Append dragged image to the slot
        // First remove any existing child from the slot (so only one image per slot)
        if (slot.firstElementChild) {
            // Move existing image back to original container or wherever you want
            // For simplicity, move it back to container holding draggables
            document.querySelector('.grid-area').appendChild(slot.firstElementChild);
        }
        slot.appendChild(draggedElement);

        // Check correctness:
        // Each slot has data-match attribute = id of correct draggable image
        // Verify that for all slots: slot.firstElementChild.id === slot.dataset.match
        const allCorrect = [...slots].every(s => {
            return s.firstElementChild && s.firstElementChild.id === s.dataset.match;
        });

        if (allCorrect) {
            successMessage.style.display = "block";
        } else {
            successMessage.style.display = "none";
        }
    });
});
