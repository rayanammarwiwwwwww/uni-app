import Image from '../assets/photo.jpg'

function StudentCard() {

    const etudiant = {
        nomPrenom: "Rayan Ammar",
        email: "rayenammarr22@gmail.com",
        telephone: "+216 95 797 361",
        filiere: "Génie logiciel et système d'information",
        anneeEtude: "2ème année",
        groupe: "GLSI 2",
        ville: "Mahdia"
    }

    return (
        <div className="student-card">
            <img src={Image} className="student-photo" alt="Photo de l'étudiant" />

            <h1 className="student-title">Fiche étudiant</h1>

            <div className="student-info">
                <p><strong>Nom & Prénom :</strong> {etudiant.nomPrenom}</p>
                <p><strong>Email :</strong> {etudiant.email}</p>
                <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
                <p><strong>Filière :</strong> {etudiant.filiere}</p>
                <p><strong>Année d'étude :</strong> {etudiant.anneeEtude}</p>
                <p><strong>Groupe :</strong> {etudiant.groupe}</p>
                <p><strong>Ville :</strong> {etudiant.ville}</p>
            </div>

            <a href={`mailto:${etudiant.email}`} className="contact-button">
                Contacter
            </a>
        </div>
    );
}

export default StudentCard;
