const draggables = document.querySelectorAll("img[draggable='true']");
const slots = document.querySelectorAll(".slot");

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
        const draggedId = event.dataTransfer.getData("text");
        const correctMatch = slot.getAttribute("data-match");

        if (draggedId === correctMatch) {
            const draggedElement = document.getElementById(draggedId);
            slot.appendChild(draggedElement);
            draggedElement.removeAttribute("draggable"); // Prevent further dragging
        }

        // Check if all slots are filled correctly
        if ([...slots].every(slot => slot.children.length > 0)) {
            window.location.href = "success.html"; // Redirect to Success page
        }
    });
});
