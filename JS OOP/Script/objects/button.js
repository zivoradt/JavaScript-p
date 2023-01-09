
(function(objects){

    class Button extends Image {
        
        constructor(source = "", width = 0, height = 0){
            super(width, height);
            
            this.src = source;

            this.addEventListener("mouseover", function(){
                this.style.opacity = 0.7; 
            });
            this.addEventListener("mouseout", function(){
                this.style.opacity = 1; 
            });
        }
    }
    
       objects.Button = Button;
    })(objects || (objects = {}));