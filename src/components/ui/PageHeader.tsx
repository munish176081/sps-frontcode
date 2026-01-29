type PageHeaderProps = {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
};

export default function PageHeader({
    title,
    // subtitle,
    children,
}: PageHeaderProps) {
    return (
        <>
            <section className="page-header pt-3 pt-md-4 pb-md-3 pb-2">
                <div className="container">
                    <div className="row align-items-start g-3">

                        <div className="col-md-6">
                            <h1 className="hx1 page-title mb-0">{title}</h1>
                            {/* {subtitle && <p className="page-subtitle">{subtitle}</p>} */}
                        </div>

                        {children && (
                            <div className="col-md-6">
                                {children}
                            </div>
                        )}

                    </div>
                </div>
            </section>
            <hr />
        </>
    );
}
