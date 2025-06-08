const draggables = document.querySelectorAll("img[draggable='true']");
const dropZones = document.querySelectorAll(".drop-zone");

// Add drag animation
const addDragAnimation = (el) => {
    el.classList.add("dragging");
};

const removeDragAnimation = (el) => {
    el.classList.remove("dragging");
};

draggables.forEach(img => {
    img.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text", event.target.id);
        addDragAnimation(event.target);
    });

    img.addEventListener("dragend", event => {
        removeDragAnimation(event.target);
    });
});

dropZones.forEach(zone => {
    zone.addEventListener("dragover", event => {
        event.preventDefault();
    });

    zone.addEventListener("drop", event => {
        event.preventDefault();
        const draggedId = event.dataTransfer.getData("text");
        const correctMatch = zone.getAttribute("data-match");
        const draggedElement = document.getElementById(draggedId);

        // Prevent multiple items in one zone
        if (zone.children.length === 0) {
            zone.appendChild(draggedElement);
            draggedElement.removeAttribute("draggable");
        }

        // Check if all zones are correctly matched
        const allCorrect = [...dropZones].every(zone => {
            const child = zone.querySelector("img");
            return child && child.id === zone.getAttribute("data-match");
        });

        if (allCorrect) {
            // Show success message or redirect
            alert("Success! All items matched correctly.");
            // window.location.href = "success.html";
        }
    });
});
