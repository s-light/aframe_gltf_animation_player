
let scene;
let dropzone;
let fileinput;
let ui_animation_list;
// let usermodel;
let usermodel_entity;


AFRAME.registerComponent('animation-controlled', {
    init: function () {
        setup_animation_controlled(this.el);
    }
});

function setup_animation_controlled(target) {
    console.log("setup_animation_control");
    target.addEventListener("model-loaded", (event) => {
        console.log("model-loaded", target, event);
        update_animation_ui(target);
    });
    // target.addEventListener("loaded", (event) => {
    //     console.log("loaded", target, event);
    // });
    // target.addEventListener("componentchanged", (event) => {
    //     console.log("componentchanged", target, event);
    // });
    // target.addEventListener("object3dset", (event) => {
    //     console.log("object3dset", target, event);
    // });
    // target.getObject3D('mesh')
}

function update_animation_ui(target) {
    console.group("update_animation_ui");
    console.log("target.getObject3D('mesh')", target.getObject3D('mesh'));
    const mesh = target.getObject3D('mesh');
    let animation_names = mesh.animations.map((clip) => clip.name);
    // let animation_names = mesh.animations.map((clip) => {
    //     return clip.name;
    // });
    for (let clip of mesh.animations) {
        console.log(`clip '${clip.name}' `, clip);
    }

    // clear list content
    ui_animation_list.innerHTML = ""
    for (let clip of mesh.animations) {
        console.log(`clip '${clip.name}' `, clip);
        const li = document.createElement("li");
        ui_animation_list.appendChild(li);
        const info = document.createElement("span");
        info.innerHTML = clip.name;
        li.appendChild(info);
        li.addEventListener("click", (event) => {
            let animation_mixer_option = `clip: ${clip.name}; crossFadeDuration: 0.5`;
            console.log("animation_mixer_option", animation_mixer_option);
            target.setAttribute("animation-mixer", animation_mixer_option);
        });
        console.log("li", li);
    }

    console.groupEnd();
}


















AFRAME.registerComponent('init_page', {
    init: function () {
        scene = this.el;
        init_page();
    }
});

function init_page () {
    console.log("init_page");

    dropzone = document.getElementById("dropzone");
    fileinput = document.getElementById("fileinput");
    // usermodel = document.getElementById("usermodel");
    usermodel_entity = document.getElementById("usermodel_entity");
    ui_animation_list = document.getElementById("ui_animation_list");

    init_file_handling();
}


function init_file_handling () {
    console.log("init_file_handling");

    // make scene drop active
    scene.addEventListener("dragenter", event => {
        event.stopPropagation();
        event.preventDefault();
        dropzone.classList.add("active");
        // console.log("scene dragenter");
    }, false);
    scene.addEventListener("dragover", event => {
        event.stopPropagation();
        event.preventDefault();
        // console.log("scene dragover");
    }, false);
    scene.addEventListener("dragleave", event => {
        event.stopPropagation();
        event.preventDefault();
        // console.log("scene leave");
    }, false);

    dropzone.addEventListener("dragenter", event => {
        event.stopPropagation();
        event.preventDefault();
        // console.log("dropzone dragenter");
    }, false);
    dropzone.addEventListener("dragover", event => {
        event.stopPropagation();
        event.preventDefault();
        // console.log("dropzone dragover");
    }, false);
    dropzone.addEventListener("dragleave", event => {
        event.stopPropagation();
        event.preventDefault();
        // console.log("dropzone leave", event);
        // console.log("event.target", event.target);
        // only deactivate if really left area..
        if (!dropzone.contains(event.relatedTarget)) {
            dropzone.classList.remove("active");
        }
    }, false);
    dropzone.addEventListener("drop", event => {
        event.stopPropagation();
        event.preventDefault();
        dropzone.classList.remove("active");
        // console.log("dropzone drop");
        const dt = event.dataTransfer;
        const files = dt.files;
        fileinput.files = files;
        handleFiles(files);
    }, false);

    fileinput.addEventListener("change", event => {
        handleFiles(fileinput.files);
    }, false);
}


function handleFiles(files) {
    if (files.length > 0) {
        // we use only the first file..
        const file = files[0];
        console.log("file", file);

        file_url = URL.createObjectURL(file);
        // usermodel.addEventListener("loaded", (event) => {
        //     console.log("usermodel loaded.");
        //     URL.revokeObjectURL(this.src);
        // })
        // usermodel.setAttribute('src', file_url);
        // usermodel_entity.addEventListener("loaded", (event) => {
        //     console.log("usermodel_entity loaded.", this);
        //     URL.revokeObjectURL(this.src);
        // })
        // usermodel_entity.setAttribute('gltf-model', "   URL(" + file_url + ")");
        usermodel_entity.setAttribute('gltf-model',     file_url);
        // const reader = new FileReader();
        // reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        // reader.readAsDataURL(file);
    }
}
