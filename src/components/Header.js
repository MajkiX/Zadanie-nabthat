import React from 'react';

const Header = (props) => {
    return (
        <div className='headerBox'>
            <div className='logo'>
            <a href="/"><img alt="Logo HTML5" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQ1LjI3MzQ0LDIuMzI0MjJjLTAuMTg3NSwtMC4yMDcwMyAtMC40NTcwMywtMC4zMjQyMiAtMC43MzgyOCwtMC4zMjQyMmgtMzkuMDcwMzFjLTAuMjgxMjUsMCAtMC41NTA3OCwwLjExNzE5IC0wLjczODI4LDAuMzI0MjJjLTAuMTkxNDEsMC4yMDcwMyAtMC4yODUxNiwwLjQ4NDM4IC0wLjI1NzgxLDAuNzY1NjNsMy41MTk1MywzOS40MjU3OGMwLjAzNTE2LDAuNDE0MDYgMC4zMjQyMiwwLjc1NzgxIDAuNzIyNjYsMC44NzVsMTYuMDExNzIsNC41NzAzMWMwLjA4NTk0LDAuMDI3MzQgMC4xNzk2OSwwLjAzOTA2IDAuMjczNDQsMC4wMzkwNmMwLjA5Mzc1LDAgMC4xODM1OSwtMC4wMTE3MiAwLjI3MzQ0LC0wLjAzOTA2bDE2LjAyMzQ0LC00LjU3MDMxYzAuMzk4NDQsLTAuMTE3MTkgMC42ODM1OSwtMC40NjA5NCAwLjcyMjY2LC0wLjg3NWwzLjUxNTYzLC0zOS40MjU3OGMwLjAyNzM0LC0wLjI4MTI1IC0wLjA2NjQxLC0wLjU1ODU5IC0wLjI1NzgxLC0wLjc2NTYyek0zNi44NDc2NiwxNS45MTc5N2gtMTguODEyNWwwLjQ0OTIyLDUuMDg5ODRoMTcuOTEwMTZsLTEuMzQzNzUsMTUuMDQyOTdsLTEwLjA1ODU5LDMuMDM5MDZsLTAuMDk3NjYsLTAuMDMxMjVsLTkuOTQxNDEsLTMuMDExNzJsLTAuNTQyOTcsLTYuMTI4OTFoNC44NzEwOWwwLjIxMDk0LDIuMzc4OTFsNS41NTg1OSwxLjE2NDA2bDUuNDU3MDMsLTEuMTY0MDZsMC41ODIwMywtNi40Mzc1aC0xNy4wNDI5N2wtMS4zMjQyMiwtMTQuODA0NjloMjQuNTU4NTl6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/></a>
            </div>
            <div className='nameBox'>Zadanie <span className='bold'>rekrutacyjne</span><br />
            {props.name ? "Mateusz Zawadzki" : null}
            </div>
        </div>
    );
};

export default Header;