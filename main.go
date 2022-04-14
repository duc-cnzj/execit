package main

import (
	_ "embed"

	"github.com/duc-cnzj/execit/cmd"

	_ "github.com/duc-cnzj/execit/plugins/picture"
	_ "github.com/duc-cnzj/execit/plugins/wssender"
)

//go:embed config_example.yaml
var configFile []byte

func main() {
	cmd.Execute(configFile)
}
