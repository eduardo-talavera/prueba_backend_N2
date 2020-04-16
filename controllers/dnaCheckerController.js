
const matrixConstruct = require('../helpers/matrixConstruct');
const mutantCheck = require('../helpers/mutantCheck');



exports.checkDna = (req, res) => {

    let dna = req.body.dna;
    let isInvalid = 0;
    
    const regExp = /[^ATGC]/;

     dna.filter((string) => {
        if (regExp.test(string) === true) {
            isInvalid++;
        }

    });

    if(isInvalid > 0){
        res.json({mensaje: 'La secuencia genetica solo puede contener los valores: ATGC'})
    } else {

        matrixCheck = new mutantCheck(matrixConstruct);

        if (matrixCheck.hasMutation(dna)){
                res.status(200).json({mensaje: 'Tiene Mutación'});
        } else {
            res.status(403).json({mensaje: 'No Tiene Mutación'});
        }
    }

}