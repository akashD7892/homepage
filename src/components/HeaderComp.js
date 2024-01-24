

export default function HeaderComp() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{height:'56px',backgroundColor:'white'}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:'69px'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{marginLeft:'32px'}}>Orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{marginLeft:'32px'}}>Integrations</a>
        </li>
        <li class="nav-item dropdown" style={{marginLeft:'32px'}}>
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tracking Page
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{marginLeft:'32px'}}>Partner with Us</a>
        </li>
      </ul>
      
      <div class="navbar-text" id="searchContainer" >
         <i class="bi bi-search" id="icon"></i>
         <input id="searchInput" type='text' placeholder="Search..." />
      </div>


      <div class="navbar-text" style={{display:'flex' ,marginLeft:'32px'}} >
        <div> <i class="bi bi-person"></i> </div>
        <div style={{marginLeft:'2px'}}>Account</div>
      </div>
      <div class="navbar-text" style={{display:'flex', marginLeft:'32px', marginRight:'69px'}}>
        <div> <i class="bi bi-gear"></i> </div>
        <div style={{marginLeft:'2px'}}>setting</div>
      </div>
    </div>
    
  </div>
  
</nav> 
<hr className="lowerLine"/>
    </div>
  )
}
