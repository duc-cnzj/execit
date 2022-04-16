package main

import (
	_ "embed"

	_ "github.com/duc-cnzj/execit/plugins/picture"
	_ "github.com/duc-cnzj/execit/plugins/wssender"

	"github.com/duc-cnzj/execit/cmd"
)

//go:embed config_example.yaml
var configFile []byte

func main() {
	cmd.Execute(configFile)
}
