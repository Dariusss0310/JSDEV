import React from "react";

export default function Post() {
  return (
    // <!-- Blog post-->
    <div className="col-lg-6">
      <div className="card mb-4">
        <a href="#!">
          <img
            className="card-img-top"
            src="https://www.google.com/search?q=lasagna&tbm=isch&ved=2ahUKEwjPmcqprtf_AhUnygIHHUzLCo0Q2-cCegQIABAA&oq=lasagna&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEIoFEENQ3EBY5mlg7GpoAnAAeACAAWCIAd8GkgECMTGYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=an-UZM-8DaeUi-gPzJar6Ag&bih=1001&biw=1920#imgrc=ownDNn3DvoqidM"
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="small text-muted">January 1, 2023</div>
          <h2 className="card-title h4">Post Title</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            aliquid atque, nulla.
          </p>
          <a className="btn btn-primary" href="#!">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}