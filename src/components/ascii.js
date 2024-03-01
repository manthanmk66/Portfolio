import React from "react";

// This is a placeholder component for the ASCII art.
// Write the name Shubham in ASCII Art
const Ascii = () => {
  return (
    <div>
      <pre className="text-left text-teal-400 font-bold  ml-8 drop-shadow-xl selection:bg-yellow-900 selection:text-white" >
        {`
      
    
      
      
███    ███  █████  ███    ██ ████████ ██   ██  █████  ███    ██     
████  ████ ██   ██ ████   ██    ██    ██   ██ ██   ██ ████   ██     
██ ████ ██ ███████ ██ ██  ██    ██    ███████ ███████ ██ ██  ██     
██  ██  ██ ██   ██ ██  ██ ██    ██    ██   ██ ██   ██ ██  ██ ██     
██      ██ ██   ██ ██   ████    ██    ██   ██ ██   ██ ██   ████     
                                                                    
                                                                    

                                                                          
    


        
  `}
      </pre>
    </div>
  );
};

export default Ascii;