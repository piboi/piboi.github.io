<body class="light">
<script>
    // A function for toggling the theme
    function toggleTheme() {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");

        localStorage.setItem(
            "colorTheme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    }

    // Initialize the theme
    if (localStorage.getItem("colorTheme") === "dark") {
        toggleTheme();
    } else if (
        localStorage.getItem("colorTheme") !== "light" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        toggleTheme();
    }
</script>



</body>
