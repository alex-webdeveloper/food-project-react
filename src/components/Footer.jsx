
export default function Footer() {

    return (
        <footer className="bg-primary p-3">
            <div className="container">
                 ©{new Date().getFullYear()} Copyright Text{' '}
                <a href="!#">Repo</a>
            </div>
        </footer>
    )
}