class Lug {

    static progress(message) {
        console.log(`☑️: ${message}`);
    }

    static info(message) {
      console.log(`📄 : ${message}`);
    }
  
    static warning(message) {
      console.log(`⚠️ : ${message}`);
    }
  
    static error(message, name, stack) {
      if (message instanceof Object) {
        console.log(`🔴 : ${message.name} -> ${message.message}`);
        console.log(`🧐 : ${message.stack}`);
      } else {
        console.log(`🔴 : ${name} -> ${message}`);
        console.log(`🧐 : ${stack}`);
      } 
    }
  }