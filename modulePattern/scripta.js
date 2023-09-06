// const chooseModule = (function(){ //top level
//     const choice1 = 'Study';
//     const choice2 = 'Sleep';

//     function chooseOne(c1,c2) {
//         const chance1 = Math.floor(Math.random() * choice1.length);
//         const chance2 = Math.floor(Math.random() * choice2.length);
//         if(chance1 > chance2) {
//             return `You choose ${c1}`;
//         }
//         return `You choose ${c2}`;
//     }
//     console.log(chooseOne(choice1, choice2));

//     return {
//         choice1,
//         choice2
//     }
// })()

export const choice1 = 'Study'; // named export
export const choice2 = 'Sleep';

function chooseOne(c1,c2) {
    const chance1 = Math.floor(Math.random() * choice1.length);
    const chance2 = Math.floor(Math.random() * choice2.length);
    if(chance1 > chance2) {
        return `You choose ${c1}`;
    }
    return `You choose ${c2}`;
}

export default chooseOne; // default export