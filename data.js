document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab-button");
    const bottomDisplay = document.getElementById("bottom-display");
    let currentTab = null;

    // Handle tab switching
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        const tabName = tab.getAttribute("data-tab");

        // Check if the same tab is clicked
        if (currentTab === tabName) {
            playSound("sounds/Negative.mp3");
            // Reset the bottom display if the same tab is clicked
            updateBottomDisplay("None");
            currentTab = null; // Reset the current tab
            // Unhighlight all tabs
            tabs.forEach((t) => t.classList.remove("tab-button-selected"));
            return;
        }
        // Unhighlight all tabs
        tabs.forEach((t) => t.classList.remove("tab-button-selected"));

        // Highlight the current tab
        tab.classList.add("tab-button-selected");

        // Update the bottom display based on the selected tab
        if (currentTab) {}
        playSound("sounds/Okay.mp3");
        currentTab = tabName;
        updateBottomDisplay(tabName);
        });
    });

    function updateBottomDisplay(tabName) {
        switch (tabName) {
          case "projects":
            termtext(`<color:green>ETHER-NET@Guest</color>:<color:blue>~/PROJECTS</color>$\nOpening Project List Display.\n\n`);
            bottomDisplay.innerHTML = `
                        <div class="flex justify-center p-4">
                            <div class="menu card grid grid-cols-2 gap-2 flex bg-gradient-to-b shadow-lg from-slate-950 to- bg-#000 p-4 w-full text-white rounded-md bg-opacity-50 shadow-primary/50">
                                <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="ddsnet-button">DDS-NET</div>
                                <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="ddslink-button">(Planned) DDS-LINK</div>
                                <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="egeauto-button">Ege Autoparts</div>
                                <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="genrpg-button">(Planned) GEN-RPG</div>
                                <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" id="cancel-button" data-hoversound="sounds/cursor.mp3" data-clicksound="sounds/Negative.mp3" data-volume="0.5">Cancel</div>
                            </div>
                        </div>
                    `;
                const ddsnet = document.getElementById("ddsnet-button");
            if (ddsnet) {
            ddsnet.addEventListener("click", () => {
              termtext(`* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>Project</color> <b>DDS-NET</b>\n* * * * * * * * * * * * * * *\n<color:cyan><anim:term-bounce>Status:</color> Self Project, Winter Break 2024, Completed in <30 days. Still actively adding features.\n<anim:term-bounce><color:blueviolet>Tech Stack:</color> HTML, CSS, Javascript, Nodejs, Expressjs, Tailwindcss, DaisyUI.\n<anim:term-bounce><color:deeppink>Links:</color> <link:https://github.com/EtherAwaits/DDS-NET, Github> | <link:https://digitaldicesystem.net, Live Demo>\n\nDDS-NET is a player management and dice roller system for the Shin Megami Tensei Tabletop Roleplaying Game, though in the future will feature other TTRPGs such as Cyberpunk Red. The design is inspired by the classic SNES games and made to simulate a terminal display. Designed to run on any screen and system, even a Raspberry Pi 5. Running locally, you can even use API to interact with a connected Arduino, <link: https://www.reddit.com/r/Megaten/comments/1hr6dyp/smt_ttrpg_arm_comp_making_your_own/, creating a cyberdeck like my own>.\n\n`);
              });
            }
            const ddslink = document.getElementById("ddslink-button");
            if (ddslink) {
                ddslink.addEventListener("click", () => {
                termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>Project</color> <b>DDS-LINK</b>\n* * * * * * * * * * * * * * *\n<anim:term-bounce><color:cyan>Status:</color> Planned, not started.\n<anim:term-bounce><color:blueviolet>Tech Stack:</color> TBD\n<anim:term-bounce><color:deeppink>Links:</color> N/A\n\nDDS-Link is a module for Foundry VTT that will allow communication between the Foundry client and DDS-NET. This will allow for transferring information between the two clients such as dice results, character details and more.\n\n");
              });
            }
            const egeauto = document.getElementById("egeauto-button");
            if (egeauto) {
                egeauto.addEventListener("click", () => {
                termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>Project</color> <b>Ege Autoparts</b>\n* * * * * * * * * * * * * * *\n<anim:term-bounce><color:cyan>Status:</color> University Group Project, Spring Semester 2025, Completed in <40 days.\n<anim:term-bounce><color:blueviolet>Tech Stack:</color> HTML, CSS, Javascript, SQL, Nodejs, Expressjs, Tailwindcss, DaisyUI, mySQL.\n<color:deeppink>Links:</color> <link:https://github.com/EtherAwaits/CSCI467-3A, Github>\n\nFinal 3 person group project for my CSCI-467 Software Engineering class which received a grade of 100%. Ege Auto Parts is a dynamic web application developed to manage the inventory and sales of a fictional auto parts company. The application uses Node.js and Express for server-side operations and database connectivity, while TailwindCSS and DaisyUI provide a modern and responsive front-end design.\n\n");
              });
            }
            const genrpg = document.getElementById("genrpg-button");
            if (genrpg) {
                genrpg.addEventListener("click", () => {
                    termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>Project</color> <b>GEN-RPG</b>\n* * * * * * * * * * * * * * *\n<anim:term-bounce><color:cyan>Status:</color> Planned, not started.\n<anim:term-bounce><color:blueviolet>Tech Stack:</color> TBD\n<anim:term-bounce><color:deeppink>Links:</color> N/A\n\nGEN-RPG is an experimental browser turn-based RPG where the player is tasked to battle against an enemy with decision making controlled by a generative AI Agent. Instead of being given traditional prompts, the agent will react according to the context of the players actions.\n\n");
              });
            }
            const cancel6 = document.getElementById("cancel-button");
            if (cancel6) {
              cancel6.addEventListener("click", () => {
                updateBottomDisplay("None");
              });
            }
            break;
            case "about":
                termtext(`<color:green>ETHER-NET@Guest</color>:<color:blue>~/ABOUT</color>$\nOpening Query Display.\n\n`);
                bottomDisplay.innerHTML = `
                            <div class="flex justify-center p-4">
                                <div class="menu card grid grid-cols-2 gap-2 flex bg-gradient-to-b shadow-lg from-slate-950 to- bg-#000 p-4 w-full text-white rounded-md bg-opacity-50 shadow-primary/50">
                                    <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="aboutme-button">About Me</div>
                                    <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="hobbies-button">Hobbies</div>
                                    <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="objective-button">Objective</div>
                                    <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="techstack-button">Tech Stack</div>
                                    <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" id="cancel-button" data-hoversound="sounds/cursor.mp3" data-clicksound="sounds/Negative.mp3" data-volume="0.5">Cancel</div>
                                </div>
                            </div>
                        `;
                const aboutme = document.getElementById("aboutme-button");
                if (aboutme) {
                    aboutme.addEventListener("click", () => {
                        termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>About</color> <b>About Me</b>\n* * * * * * * * * * * * * * *\n\nMy name is Brett Williams, I am currently a computer Science student at Northern Illinois University with a software development emphasis. I develop free online tools in my spare time for fun.\n\n");
                    });
                }
                const hobbies = document.getElementById("hobbies-button");
                if (hobbies) {
                    hobbies.addEventListener("click", () => {
                        termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>About</color> <b>Hobbies</b>\n* * * * * * * * * * * * * * *\n\nI have many hobbies and interests including Programming, Electronic tinkering, Tabletop games, Video games, Card games, Model Painting, Reading, Cooking.\n\n");
                    });
                }
                const objective = document.getElementById("objective-button");
                if (objective) {
                    objective.addEventListener("click", () => {
                        termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>About</color> <b>Objective</b>\n* * * * * * * * * * * * * * *\n\nTo develop impactful software tools that empower and assist people for years to come.\n\n");
                    });
                }
                const techstack = document.getElementById("techstack-button");
                if (techstack) {
                    techstack.addEventListener("click", () => {
                        termtext("* * * * * * * * * * * * * * *\n* <anim:term-blue><color:yellow>About</color> <b>Tech Stack</b>\n* * * * * * * * * * * * * * *\n\n<i>My Current Tech Stack Skills.</i>\n<anim:term-bounce><color:cyan>Languages:</color> C++, Python, JavaScript, Lua, Assembly, HTML, CSS, SQL, PHP\n<anim:term-bounce><color:blueviolet>Web Development:</color> Node.js, mySQL, MongoDB, Tailwind CSS, WordPress, Express.js\n<anim:term-bounce><color:deeppink>Software & Tools:</color> Visual Studio, Git/Github, Docker, Unix\n\n");
                    });
                }
                const cancel1 = document.getElementById("cancel-button");
                if (cancel1) {
                  cancel1.addEventListener("click", () => {
                    updateBottomDisplay("None");
                  });
                }
                break;
                case "socials":
                    termtext(`<color:green>ETHER-NET@Guest</color>:<color:blue>~/SOCIALS</color>$\nOpening Social Media & Contact Display.\n\n`);
                    bottomDisplay.innerHTML = `
                                <div class="flex justify-center p-4">
                                    <div class="menu card grid grid-cols-2 gap-2 flex bg-gradient-to-b shadow-lg from-slate-950 to- bg-#000 p-4 w-full text-white rounded-md bg-opacity-50 shadow-primary/50">
                                        <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="email-button">E-Mail</div>
                                        <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="github-button">GitHub</div>
                                        <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="linkedin-button">LinkedIn</div>
                                        <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" data-hoversound="sounds/cursor.mp3" data-volume="0.5" data-clicksound="sounds/Okay.mp3" id="discord-button">Discord</div>
                                        <div tabindex="0" class="menu-option hover-sfx click-sfx hover:shadow-md hover:shadow-accent/50" id="cancel-button" data-hoversound="sounds/cursor.mp3" data-clicksound="sounds/Negative.mp3" data-volume="0.5">Cancel</div>
                                    </div>
                                </div>
                            `;
                    const email = document.getElementById("email-button");
                    if (email) {
                        email.addEventListener("click", () => {
                            window.open("mailto:brettwilliams343@gmail.com", "_blank");
                        });
                    }
                    const github = document.getElementById("github-button");
                    if (github) {
                        github.addEventListener("click", () => {
                            window.open("https://github.com/EtherAwaits", "_blank");
                        });
                    }
                    const linkedin = document.getElementById("linkedin-button");
                    if (linkedin) {
                        linkedin.addEventListener("click", () => {
                            window.open("https://www.linkedin.com/in/brettwilliams343", "_blank");
                        });
                    }
                    const discord = document.getElementById("discord-button");
                    if (discord) {
                        discord.addEventListener("click", () => {
                            window.open("https://discordapp.com/users/etherawaits", "_blank");
                        });
                    }
                    const cancel2 = document.getElementById("cancel-button");
                    if (cancel2) {
                      cancel2.addEventListener("click", () => {
                        updateBottomDisplay("None");
                      });
                    }
                    break;
            case "resume":
                termtext(`<color:green>ETHER-NET@Guest</color>:<color:blue>~/RESUME</color>$\nOpening Resume Display.\n\n`);

                bottomDisplay.innerHTML = `
                    <div class="flex justify-center p-4">
                        <div class="menu card flex bg-gradient-to-b shadow-lg from-slate-950 to- bg-#000 p-4 w-full text-white rounded-md bg-opacity-50 shadow-primary/50">
                            <div class="resume-content">
                                <div class="pdf-container mt-4">
                                    <iframe src="./Brett Williams Resume.pdf" class="w-full sm:h-96 bg-gradient-to-b from-secondary to- shadow-lg shadow-secondary/50 card form"></iframe>
                                </div>
                                <p class="my-2">For more details, feel free to reach out or download my full resume.</p>
                                <button id="download-resume" class="btn btn-sm form-input hover-sfx place-self-center click-sfx" data-hoversound="sounds/cursor.mp3" data-clicksound="sounds/Comp.mp3">Download Resume</button>
                                <button id="cancel-resume" class="btn btn-sm form-input hover-sfx place-self-center click-sfx" data-hoversound="sounds/cursor.mp3" data-clicksound="sounds/Okay.mp3">Cancel</button>
                            </div>
                        </div>
                    </div>
                `;

                const downloadResume = document.getElementById("download-resume");
                if (downloadResume) {
                    downloadResume.addEventListener("click", () => {
                        window.open("./Brett Williams Resume.pdf", "_blank");
                    });
                }

                const cancelResume = document.getElementById("cancel-resume");
                if (cancelResume) {
                    cancelResume.addEventListener("click", () => {
                        updateBottomDisplay("None");
                    });
                }

            break;
          default:
            tabs.forEach((t) => t.classList.remove("tab-button-selected"));
            bottomDisplay.innerHTML = `
                        <div id="bottom-display"><br></div>	
                        `;
            currentTab = null;
            termtext(`<color:green>ETHER-NET@Guest</color>:<color:blue>~</color>$ \n`);
        }
      }

    // Function to update the corner display
    function updateCornerDisplay() {
        const now = new Date();
        const options = { day: 'numeric', year: '2-digit', month: '2-digit', day: '2-digit' };
        const formattedDate = now.toLocaleDateString(undefined, options);
        const formattedTime = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
        const timeDisplay = document.getElementById("time-display");
        const dateDisplay = document.getElementById("date-display");
        const moonPhaseDisplay = document.getElementById("moonimage");
        
        timeDisplay.innerHTML = `${formattedTime}`;
        dateDisplay.innerHTML = `${formattedDate}`;
        moonPhaseDisplay.innerHTML = `<img src="./views/8.gif" alt="8" class="size-11 rounded-full shadow-lg ring-2 ring-secondary">`;
    }

    // Update the corner display every 10 seconds
    updateCornerDisplay();
    setInterval(updateCornerDisplay, 10000);
});