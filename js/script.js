async function getStreams() {
    try {
        const response = await fetch("http://localhost:3000/api/streams");
    } catch (err) {
        console.error("Error fetching streams:", err);
    }
}

getStreams();